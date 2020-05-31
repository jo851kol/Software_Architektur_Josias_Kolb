import axios from "axios";

export function getAllCustomers() {
    //Fetch sample data.
    return axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        })
}

export function getCustomer(id) {
    //Fetch sample data.
    return axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => {
            for (let customer of response.data) {
                if (customer.id.toString() === id) {
                    return customer;
                }
            }
        })
        .catch(error => {
            console.log(error);
            return null;
        })
}
