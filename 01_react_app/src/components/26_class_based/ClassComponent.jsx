import React from "react"

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"vinayaka",
            mobileNo:8749018405,
            position:"FSD",
            age:28
        }
        this.changeAge = this.changeAge.bind(this)
    }
    changeAge(){
        this.setState({age:this.state.age+1})
    }
    render(){
        return(
            <div id="main">
                <h1>Hello my name is {this.state.name} and my, contact number {this.state.mobileNo}</h1>
                <p>
                    Iam {this.state.age} years old and I am working here as {this.state.position}
                </p>
                <button onClick={this.changeAge}>
                    increment
                </button>
            </div>
        )
    }
}

export default ClassComponent;