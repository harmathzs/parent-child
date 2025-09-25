import React from "react";
export default class Child extends React.Component {
    state = {
        name: ""
    }

    handleButtonClick = me => {
        this.props.onHungry(me)
    }

    render() {
        return (
            <div>
                <p>
                    Child {this.props.name}; my parent is: {this.props.parent?.state.name}.
                    <button onClick={()=>this.handleButtonClick(this)}>I'm hungry</button>
                </p> {/* App ?? */}
            </div>
        )
    }

    componentDidMount() {
        console.log('Child props', this.props)

        this.setState({name: this.props.name})
    }
}