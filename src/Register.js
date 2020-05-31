import React, {Component} from 'react';
import questionmark_icon from './resources/questionmark_icon.png'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            address: '',
            email: '',
            newsletter: false
        }
    }

    inputChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    checkboxChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.checked;
        this.setState({[name]: value})
    }

    validate = (event) => {
        event.preventDefault();
        alert('Validation not implemented yet. Received input: ' +
            this.state.surname + ' ' + this.state.name + ' ' +
            this.state.address + ' ' + this.state.email + ' ' +
            this.state.newsletter);

        this.props.history.push("/notImplementedYet");
    }

    render() {

        const tooltips = {
            surname: 'Please enter your surname. It can contain any char.',
            name: 'Please enter your surname. It can contain any char.',
            address: 'Please enter your address. An address consists of a city, followed by the street and a number.',
            email: 'Please enter your email-address. It has to contain the "@"-char.'
        };

        return (
            <div className={"center"}>
                <h1>Registration</h1>
                <h4>Please enter your personal data:</h4>
                <form onSubmit={this.validate}>
                    <div>
                        <input id={"surname"} name={"surname"} type={"text"} onChange={this.inputChangeHandler}
                               placeholder={"Name"} required/>
                        <img src={questionmark_icon} className={"tooltipIcon"} alt={"tooltip"}
                             title={tooltips.surname}/>
                    </div>

                    <div>
                        <input id={"name"} name={"name"} type={"text"} onChange={this.inputChangeHandler}
                               placeholder={"Surname"} required/>
                        <img src={questionmark_icon} className={"tooltipIcon"} alt={"tooltip"} title={tooltips.name}/>
                    </div>

                    <div>
                        <input id={"address"} name={"address"} type={"text"} onChange={this.inputChangeHandler}
                               placeholder={"Address"} required/>
                        <img src={questionmark_icon} className={"tooltipIcon"} alt={"tooltip"}
                             title={tooltips.address}/>
                    </div>

                    <div>
                        <input id={"email"} name={"email"} type={"email"} onChange={this.inputChangeHandler}
                               placeholder={"E-Mail"} required/>
                        <img src={questionmark_icon} className={"tooltipIcon"} alt={"tooltip"} title={tooltips.email}/>
                    </div>

                    <input id={"newsletter"} name={"newsletter"} type={"checkbox"}
                           onChange={this.checkboxChangeHandler}/><label htmlFor={"newsletter"}>Receive our
                    newsletter</label><br/>

                    <input type={"submit"} value={"Register now!"}/>
                </form>
            </div>
        );
    }
}

export default Register;
