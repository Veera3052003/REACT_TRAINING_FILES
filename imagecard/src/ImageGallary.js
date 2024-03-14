import React from "react";
import Electronics from "./Electronics.js";
import Fashion from "./Fashion.js";
import Bikes from "./Bikes.js";
import Home from "./HomeApplicants.js";
import Buttons from "./Buttonpanel.js";

class ImageGallery extends React.Component{

 constructor(props){
    super(props)
 }
    render(){
        return(
            <div>
            <Electronics eleData = {this.props.sndData}/>
            <Fashion eleData = {this.props.sndData} />
            <Bikes eleData = {this.props.sndData}/>
            <Home eleData  = {this.props.sndData}/>
            </div>
            )
    }
}
export default ImageGallery;