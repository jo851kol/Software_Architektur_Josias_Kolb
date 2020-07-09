import React, {Component} from 'react';
import {getCustomer} from "./DatabaseService"

class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: 'not set yet'
        }
    }

    getCustomerPromise = () => {
        let customer = getCustomer(this.props.match.params.id);
        customer.then(this.setCustomer)
    }

    setCustomer = (customer) => {
        if (customer === undefined) {
            this.setState({customer: undefined});
        } else {
            this.setState({customer: customer});
            document.getElementById('name').value = customer.name;
            document.getElementById('street').value = customer.address.street;
            document.getElementById('streetNumber').value = customer.address.suite;
            document.getElementById('city').value = customer.address.city;
        }
    }

    saveChanges = () => {
        this.props.history.push("/notImplementedYet");
    }

    componentDidMount() {
        this.getCustomerPromise();
    }

    render() {
        let content;
        if (this.state.customer === undefined) {
            content = <h1>Customer with id {this.props.match.params.id} not found!</h1>;
        } else if (this.state.customer !== 'not set yet') {
            content = <div className={"standardBlock"}>
                <h4>Customer{' ' + this.props.match.params.id}</h4>
                <input id={"name"} type={"text"} placeholder={"Name"}/><br/>
                <input id={"street"} type={"text"} placeholder={"Street"}/><br/>
                <input id={"streetNumber"} type={"text"} placeholder={"Street Number"}/><br/>
                <input id={"city"} type={"text"} placeholder={"city"}/><br/>
                <button onClick={this.saveChanges}>Save changes</button>
            </div>;
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Customer;
