import React from "react";
export default class Parent extends React.Component {
    state = {
        name: 'Parent'
    }

    render() {
        return (
            <div>
                <p>Parent</p>
                {this.props.children}
            </div>
        )
    }

    componentDidMount() {
        console.log('Parent children', this.props.children)
        /*
        this.props.children.forEach((child, idx) => {
            console.log('idx, child', idx, child)
        });
        */
    }
}