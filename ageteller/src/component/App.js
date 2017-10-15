import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStates from './AgeState';
class App extends Component {
    constructor() {
        super();
        this.state = {
            newDate:'',
            birthday:'1993-06-16'
        }
    }
    changeBirthday(){
        console.log(this.state)
        this.setState({birthday: this.state.newDate})
    }
    render() {
        return (
            <div className='App'>
                Input your bday.
                <Form inline>
                    <FormControl 
                    type="date"
                    onChange={event => this.setState({newDate : event.target.value})}
                    >
                    </FormControl>
                    {' '}
                    <Button onClick = {()=>this.changeBirthday()}>
                        Submit
                    </Button>
                    <AgeStates date={this.state.birthday}/>
                </Form>
            </div>
        )
    }
}

export default App;