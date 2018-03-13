import React, { Component } from 'react';

class Home extends Component {

    handleClickButton(e) {
        console.log(e.type)
    }

    render() {
        return (
            <div>
                <h2>Home Page:</h2>
                <button onClick={this.handleClickButton.bind(this)}>Click Me!</button>
            </div>
        )
    }
}

export default Home
