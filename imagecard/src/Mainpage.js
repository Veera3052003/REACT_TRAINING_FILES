import ImageGallery from "./ImageGallary";
import Buttons from "./Buttonpanel";
import React from "react";
class Mainpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:""
        }
    }
    hereData = (val)=>{
        this.setState({value:val})
    }
    

    render() {
        return (
            <div>
                <Buttons getData={this.hereData}/>
                <ImageGallery sndData = {this.state.value} />
            </div>

        )
    }
}
export default Mainpage; 