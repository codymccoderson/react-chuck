import React, { Component } from "react";

class Quote extends Component {

    state = {
        quote: "Fetching a quote..."
    }
    
    render() {
        const { quote } = this.state;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;