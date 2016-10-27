$(function() {
  var socket = io.connect('http://localhost:3000');

  // Initialize variables
  var $window = $(window);
  var $username = $("#username");      // 打卡人名稱
  var $clocktime = $("#clocktime");    // 打卡時間點
  var $date = $("#date");              // 打卡日期
  var $landingPage = $('.landing-pg'); // The landing page
  var $contentPage = $('.content-pg'); // The content page
  var $img = $('.photo-bg');

  function setUser(user){
    if (user){
      // 數值初始化
      var today = new Date();
      var month = today.getMonth()+1;
      var date = today.getDate();
      var hour = today.getHours();
      var mins = today.getMinutes();
      var imgUrl = "url(" + user.img + ")";
      var time = {
         "month":month,
         "date" :date,
         "hour" :hour ,
         "mins" :mins
      };

      // 回傳打卡時間 obj
      socket.emit('login time',time);
      // 前端照片設定
      $img.css("background-image", imgUrl);
      // 時間文字化
      var monStr = time.month.toString();
      var dateStr = time.date.toString();
      var hourStr = time.hour.toString();
      var minsStr = time.mins.toString();

      // 時間文字長度調整
      hourStr = hourStr.length === 1 ? "0" + hourStr : hourStr;
      minsStr = minsStr.length === 1 ? "0" + minsStr : minsStr;
      // 前端時間設定
      $clocktime.text( hourStr + ":" + minsStr );
      $date.text( monStr + " 月 " + dateStr + " 日 ");

      // 前端姓名設定
      $username.text(user.username);
      // 第一頁消失
      $landingPage.delay(1500).fadeOut();
    }
  }

  //  此處是為了模擬指紋符合時的情境，應把以下 click 事件刪除
  $landingPage.click(function(){
    socket.emit('user login');
  });

  socket.on('user login', function(data){
    $('.blink').removeClass('blink');
    $('.neon').addClass("light-off");
    setUser(data);
  });

});
