import './Header.css'
import {Link} from 'react-router-dom';
const HeaderComponent=()=>{
    // const tab_heading_color=document.getElementsByClassName('tab_heading_style')
    // function colorChange(){
    //     tab_heading_color.style.color='blue'
    // }
    // onClick={"colorChange()"}
    return(
        <div className='header'>
            <div className='logo_div'>
                <img src={require(`./Images/logo.png`)} className="logo" alt=""/>
            </div>
            <ul className='list'>
                <Link to={'/'} className="tab_heading_style"><li>home</li></Link>
                <Link to={'/product'} className="tab_heading_style"><li>product</li></Link>
                <Link to={'/service'} className="tab_heading_style"><li>service</li></Link>
                <Link to={'/about'} className="tab_heading_style"><li>about</li></Link>
            </ul>
            <div className="login_button_container">
                <button type="button" className="login_button">login</button>
            </div>
        </div>
    )
}
export default HeaderComponent
