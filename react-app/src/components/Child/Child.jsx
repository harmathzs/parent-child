import React from "react";
export default class Child extends React.Component {
    render() {
        return (
            <div>
                <p>Child {this.props.name}</p>
            </div>
        )
    }
}