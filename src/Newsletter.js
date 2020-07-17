import React, {Component} from 'react';

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allNewsletters: ["Latest Newsletter"]
        }
    }

    addNewsletter = () =>{
        let allNewsletters = [...this.state.allNewsletters];
        allNewsletters.push("Newsletter from " + this.state.allNewsletters.length + " ago.")
        this.setState({allNewsletters: allNewsletters});
    }

    render() {
        return (
            <div className={"center"}>
                <button onClick={this.addNewsletter}>
                    Show last newsletter
                </button>
                {this.state.allNewsletters.map(newsletter => {
                    return <div>{newsletter}</div>
                })}
            </div>
        );
    }
}

export default Newsletter;
