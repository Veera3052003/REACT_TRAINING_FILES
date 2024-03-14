import React from "react"
import {Component} from "react"
import './About.css'


class Demo extends Component{
    
    constructor(props){
        super(props)
        this.state={
            name:"veera"
        }
    }

    handleclick=()=>{
        console.log('yes')
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleclick} className="button_bottom">Click here</button>
            </div>
        )
    }
}

export default Demo;