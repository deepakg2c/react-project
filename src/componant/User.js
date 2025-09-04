import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }


    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>Count</h2>
                <h3>{count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}> Inrement</button>
            </div>
        );
    }

}

export default User