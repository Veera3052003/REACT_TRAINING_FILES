import React from "react";
import dress from "./Fashion/dress.jpg"
import makeups from "./Fashion/makeups.jpg"
import mencourt from "./Fashion/mencourt.jpg"
import shoe from "./Fashion/shoe.jpg"
import "./Image.css"
class Fashion extends React.Component {
    name = "Fashion"
    all = "all"

    Fashionobj = [dress, makeups, mencourt, shoe]
    constructor(props){
        super(props)
    }
    
    render() {
        let FashionImg = this.Fashionobj.map((val) => {
            // if(this.name == this.props.eleData || this.all == this.props.eleData){
                return (
                    <img src={val}></img>
                )
            // }
        })
        return (
            <div>
            {
                (this.name == this.props.eleData || this.all == this.props.eleData) &&
                <div className="content">
                    
                        <div>

                            <h3 className="m-0">{this.name}</h3>
                            <div className="s-line"></div>
                        </div>
                    
                    <div className="d-flex">
                        {FashionImg}

                    </div>
                </div>
            }
        </div>
        )
      
    }
}
export default Fashion;