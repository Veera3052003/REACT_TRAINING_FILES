import "./Footer.css"
import { Link } from "react-router-dom";

// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> 
// used in index.html file

const FooterComponent=()=>{
    return(
        <footer>
            <div>
                <h4 className="footer_header">Contact Us</h4>
            </div>
            <div className="footer_flex">
                <div className="footer_flex_left">
                    <div className="Social_media_icons">
                        <Link to={'/'} className='social_media_link'><i class="bi bi-instagram icon_style"></i></Link>
                        <Link to={'/'} className='social_media_link'><i class="bi bi-facebook icon_style"></i></Link>
                        <Link to={'/'} className='social_media_link'><i class="bi bi-twitter-x icon_style"></i></Link>
                        <Link to={'/'} className='social_media_link'><i class="bi bi-youtube icon_style"></i></Link>
                        <Link to={'/'} className='social_media_link'><i class="bi bi-whatsapp icon_style"></i></Link>
                    </div>
                    <div>
                        <p className="footer_content">Start Fresh, Start Flavorful: Your One-Stop Shop for Juices, Fruits, and Savory Starters!</p>
                    </div>
                </div>
                <div className="form">
                    <div className="form_heading">
                        <h4>Feedback Form</h4>
                    </div>
                    <div className="row_1">
                        <div className="label_style name_label"><label>Name</label></div>
                        <div><input className="input_style input_1" type="text"></input></div>
                    </div>
                    <div className="row_2">
                        <div className="label_style mobile_no_label"><label>Mobile No.</label></div>
                        <div><input className="input_style input_2" type="text"></input></div>
                    </div>
                    <div className="row_3">
                        <div className="label_style"><label>Feedback</label></div>
                        <div><textarea className="input_style input_3" id="" rows="5" aria-label=""></textarea></div>
                    </div>
                    <div className="submit_button">
                        <button type="submit" class="btn btn-primary button_color" onClick={()=>{alert("Thanks for your Valuable Feedback")}}>Submit</button>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default FooterComponent