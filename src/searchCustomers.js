import React, {Component} from 'react';
import {getAllCustomers} from "./DatabaseService"

class searchCustomers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    getAllCustomerPromise = () => {
        let allCustomers = getAllCustomers();
        allCustomers.then(this.setMatchingCustomers);
    }

    setMatchingCustomers = (allCustomers) => {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let street = document.getElementById('street').value;
        let streetNumber = document.getElementById('streetNumber').value;
        let city = document.getElementById('city').value;
        let matchingCustomers = [];

        for (let customer of allCustomers) {
            if (customer.id.toString().includes(id)
                && customer.name.includes(name)
                && customer.address.street.includes(street)
                && customer.address.suite.includes(streetNumber)
                && customer.address.city.includes(city)) {
                matchingCustomers.push(customer);
            }
        }
        this.setState({customers: matchingCustomers});
        document.getElementById('searchResultHeading').hidden = false;
    }

    render() {

        return (
            <div>
                <div className={"standardBlock"}>
                    <h4>Enter customer data to start a search:</h4>
                    <input id={"id"} type={"text"} placeholder={"ID"}/>
                    <input id={"name"} type={"text"} placeholder={"Name"}/>
                    <input id={"registeredSince"} type={"text"} placeholder={"Registered since"}/><br/>

                    <input id={"street"} type={"text"} placeholder={"Street"}/>
                    <input id={"streetNumber"} type={"text"} placeholder={"Street Number"}/>
                    <input id={"city"} type={"text"} placeholder={"city"}/>
                    <button onClick={this.getAllCustomerPromise}>Start search</button>
                </div>

                <div className={"standardBlock"}>
                    <h4 id={"searchResultHeading"} hidden={true}>Available customers:</h4>
                    {this.state.customers.map(customer => {
                        return <div><a href={"/customer/"+customer.id}>{customer.id}_{customer.name}___
                            {customer.address.street}_{customer.address.suite}_{customer.address.city}___
                            {customer.email}</a></div>
                    })}
                </div>
            </div>
        );
    }
}

export default searchCustomers;
