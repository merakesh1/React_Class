import React from "react";
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "rakesh",
            age: 23
        }
        console.log(this.state)
        console.log("constructor")
        this.toggle=this.toggle.bind(this)
    }
    toggle() {
        this.setState(prevState => {
            return {
                name: prevState.name === "rakesh" ? "tarun" : "rakesh",
                address: "pune"
            }
        })
        console.log(this.state)
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <>
                <h1>hello</h1>
                <button onClick={this.toggle}>toggle</button>
            </>
        )
    }
}

export default Demo

