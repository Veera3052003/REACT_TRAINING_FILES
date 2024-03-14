import React from "react";
import abike from "./Bikesimg/bike1.jpg"
import bbike from "./Bikesimg/bike2.jpg"
import cbike from "./Bikesimg/bike3.jpg"
import dbike from "./Bikesimg/bike4.jpg"
import "./Image.css"

class Bikes extends React.Component{
    name  = "Bikes"
    all = "all"

    Bikeobj = [abike,bbike,cbike,dbike]
    render(){
        let BikeNew = this.Bikeobj.map((val)=>{
            // if(this.name == this.props.eleData || this.all == this.props.eleData){
                return(
                    <img src={val}></img>
    
                )
            // }
           
        })
        return(
            <div>
            {
                (this.name == this.props.eleData || this.all == this.props.eleData) &&
                <div className="content">
                    
                        <div>

                            <h3 className="m-0">{this.name}</h3>
                            <div className="s-line"></div>
                        </div>
                    
                    <div className="d-flex">
                        {BikeNew}

                    </div>
                </div>
            }
        </div>
        )
    }
}
export default Bikes;