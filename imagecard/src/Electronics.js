import React from "react";
import "./Image.css";
import applelaptop from "./electronics/applelaptop.jpg";
import applephone from "./electronics/applephone.avif";
import applewatch from "./electronics/applewatch.jpg";
import earpods from "./electronics/earpods.jpg";
class Electronics extends React.Component {
    imageObj = [applelaptop, applephone, applewatch, earpods]
    name = "Electronics";
    all = "all"

    constructor(props) {
        super(props)
    }


    render() {
        let imageS = this.imageObj.map((val) => {
            // if (this.name == this.props.eleData || this.all == this.props.eleData) {
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
                            {imageS}

                         </div>
                    </div>
                }
            </div>
        )
    }
}
export default Electronics;