import React from "react";
import "./Image.css"
import home1 from "./homeapplicants/brandon-cormier-qIfk8CwNFk4-unsplash.jpg"
import home2 from "./homeapplicants/emmanuel-ikwuegbu-FXpJW_wdMdk-unsplash.jpg"
import home3 from "./homeapplicants/filip-mroz-gma1zfS3_6E-unsplash.jpg"
import home4 from "./homeapplicants/jason-leung-jWU9FpLW7fI-unsplash.jpg"
class Home extends React.Component{
    homearr = [home1,home2,home3,home4]
    name = "HomeApplicants"
    all = "all"

    constructor(props){
        super(props)
    }
    render(){
        let HomeNew = this.homearr.map((val)=>{
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
                        {HomeNew}

                    </div>
                </div>
            }
        </div>
        )
    }
}
export default Home;