import React, {Component} from 'react';
import {div} from "../../../es6_playground/app/math";

class SignIn extends Component{
    constructor( props ){
        super ( props );
        this.state = {
            form: {
                email: '',
                password: ''
            }
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    }

    handleInputChange( event ){
        console.log('event: ', event.target);
        console.log('state: ' , this.state.form);

        // const { name, value } = event.target;
        // const { form } = this.state;
        // form[name] = value;
        // console.log('name: ', form[name], 'value: ', value );
        // this.setState({form: { ...form }});

        /************/
        var fieldName = event.target.name;
        var fieldValue = event.target.value;
        console.log(fieldName, fieldValue);

        var newState = this.state;

        // var newState = {};
        // for(var key in this.state.form){
        //     newState.form[key] = this.state.form[key];
        // }

        newState.form[fieldName] = fieldValue;

        this.setState( newState );
    }

    handleSubmitBtn( event ){
        event.preventDefault();
        console.log('Submitted', this.state.form);

        const newState = {
            form: {
                email: '',
                password: ''
            }
        };

        this.setState(newState);

    }

    render(){
        const { email, password } = this.state.form;
        return(
            <form onSubmit={ this.handleSubmitBtn }>
                <div>
                    <label>Email</label>
                    <br/>
                    <input type="text" name="email" value={email} onChange={ (event) => this.handleInputChange(event) }/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input type="text" name ="password" value={password} onChange={ (event) => this.handleInputChange(event) }/>
                </div>
                <button onClick={ this.handleSubmitBtn }>Submit</button>
            </form>
        )
    }
}

export default SignIn;