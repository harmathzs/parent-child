import React from "react";
export default class Child extends React.Component {
    render() {
        return (
            <div>
                <p>Child {this.props.name}</p>
                <p>My parent is: {this.props.parent?.state.name}</p> {/* App ?? */}
            </div>
        )
    }

    componentDidMount() {
        console.log('Child props', this.props)
    }
}