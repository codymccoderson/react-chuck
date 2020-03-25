import React, { Component } from "react";

class Quote extends Component {

    state = {
        quote: "Fetching a quote..."
    }

    componentDidMount() {
        setTimeout (() => {
            this.setState({
                quote: "Chuck Norris does not care about your rules."
            })
        }, 2000);
    }

    render() {
        const { quote } = this.state;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;