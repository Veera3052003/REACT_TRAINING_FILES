import { Link } from "react-router-dom";
import "./Header.css";
import { useState} from 'react';


// When I click the Starter in the header/ Nav bar I need to display a dropdown box.
// When I select the option in the dropdown box, then I need to navigate to that particular content under the starter itself.
// For this we have to use useState, Before clicking the option in the header the status will be false by default
// when I click that option in the header then the status will change to true and 
// When the status becomes true, then the condition works... i..e when I click the Starter, the condition, to show the dropdown box displays.

const HeaderComponent = () => {
  
  const[status,setStatus]=useState(false)
  // useEffect(()=>{},[status])

  return (
    <div className="header">
      <div>
        <img src={require("./Image/wen_starters_logo.jpg")} className="logo" alt=""/>
      </div>
      <ul className="list">
        <Link to={"/"} onClick={()=>{setStatus(false)}} className="tab_heading_style"><li className="list_style">Home</li></Link>
        <Link to={"/About"} onClick={()=>{setStatus(false)}} className="tab_heading_style"><li className="list_style">About</li></Link>
        {/*When I click the Starter in the navbar, the current page should not be gone, So I didn't give the to attribute
        so that it cannot navigate to some other page when i click the starter, since I set the status to be true when
        I click the Starter, the condition(dropdown box displays) works */}
        <Link onClick={()=>{setStatus(true)}} className="tab_heading_style starter_style"><li className="list_style">Starter</li></Link>
        <Link to={"/Cart"} onClick={()=>{setStatus(false)}} className="tab_heading_style"><li className="list_style">Cart</li></Link>
      </ul>
      {
        (status)&&
        <div className='drop_down'>
          <div className="left_box">
            <p className="option_border"><Link to={'/Starter/Drinks'} className="option_style" onClick={()=>{setStatus(false)}}>Drinks</Link></p>
            <p className="option_border"><Link to={'/Starter/Fruits'} className="option_style" onClick={()=>{setStatus(false)}}>Fruits</Link></p>
            <p className="option_border"><Link to={'/Starter/Pastry'} className="option_style" onClick={()=>{setStatus(false)}}>Pastry</Link></p>
          </div>
          <div className="right_box">
            <p className="option_border"><Link to={'/Starter/Veg'} className="option_style" onClick={()=>{setStatus(false)}}>Veg</Link></p>
            <p className="option_border"><Link to={'/Starter/NonVeg'} className="option_style" onClick={()=>{setStatus(false)}}>NonVeg</Link></p>
            <p className="option_border"><Link to={'/Starter/Pizza'} className="option_style" onClick={()=>{setStatus(false)}}>Pizza</Link></p>
          </div>
        </div>
      }
    </div>
  );
};

export default HeaderComponent;
