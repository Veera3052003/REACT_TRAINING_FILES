import React from "react";
import "./Image.css";
import bikesbtn from "./BtnsImage/bikes.webp";
import elebtns from "./BtnsImage/ele.webp";
import fashbtns from "./BtnsImage/fash.webp";
import homebtns from "./BtnsImage/homeee.webp";
import all from "./BtnsImage/all.png";
class Buttons extends React.Component {
    NameImgBtns = [
        {
            BtnName: 'all',
            BtnImg: all
        }
        , {
            BtnName: "Electronics",
            BtnImg: elebtns
        },
        {
            BtnName: "Fashion",
            BtnImg: fashbtns
        },
        {
            BtnName: "Bikes",
            BtnImg: bikesbtn
        },
        {
            BtnName: "HomeApplicants",
            BtnImg: homebtns
        }]
    constructor(props) {
        super(props)
    }
    clickHere = (val) => {
        this.props.getData(val)
    }

    render() {
        let a = this.NameImgBtns.map((val) => {
            return (
                <div className="btns">
                    <img src={val.BtnImg} alt=""></img>
                    <button onClick={() => { this.clickHere(val.BtnName) }}>{val.BtnName}</button>
                </div>
            )
        })

        return (
            <div className="buttons">
                <div className="btns-wid">
                    {a}

                </div>


            </div>
        )
    }
}
export default Buttons;