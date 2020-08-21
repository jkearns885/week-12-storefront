import React from 'react'

class Logos extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

componentDidMount() {
        this.callApi()
            // ^ once Api responds, the below is ran
            .then((response) => {
                this.setState({ response: response.length + ' items found' })
            })
            .catch(err => console.log(err));
    }

    //asynchronous function call, meaning it will wait
    callApi = async () => {
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Logos Place holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Logos