import React from 'react'
import './About.css'

function About(){
    return(
        <div className="about_page">
            <div className="section">
                <h1 className="welcome">About Fruits and Roots</h1>
                <div className="move_to_center">
                    <img src={require('./Images/welcome_image_card.jpeg')} className='welcome_image_card' alt=""/>
                    {/* <div className='rotate_border'></div> */}
                </div>
                <p className="content">Welcome to Fruits and Roots, where freshness meets convenience! We are passionate 
                about bringing you the finest fruits and vegetables to elevate your healthy lifestyle. Let us share our 
                story with you.</p>
            </div>
            <div className="section">
                <h3 className="sub-heading">Our Vision</h3>
                <div className="move_to_center">
                    <iframe src="https://assets.pinterest.com/ext/embed.html?id=329818372722993758" height="630" width="500" frameBorder="0" scrolling="no" title="video"></iframe>
                </div>
                <p className="content">At Fruits and Roots, we envision a world where everyone has easy access to fresh, 
                locally sourced fruits and vegetables. We aim to make a positive impact on the health and well-being of 
                our customers by providing a diverse range of wholesome produce.</p>
            </div>
            <div className="section">
                <h3 className="sub-heading">Our Mission</h3>
                <div className='flex_box'>
                    <div>
                    <img src={require('./Images/mission.jpg')} className="left_image" alt=""/>
                    </div>
                    <div className='right_content_div'>
                        <p className="content">Our mission is simple: to connect you with nature's bounty in the most accessible 
                        and sustainable way. We strive to empower individuals and communities to make informed, healthy choices 
                        that contribute to a balanced and fulfilling life.</p>
                    </div>
                </div>      
            </div>
            <div className="section">
                <h3 className="sub-heading">Why Choose Fruits and Roots?</h3>
                <div className="flex_box">
                    <div className="sub-section flex_box padding_style">
                        <div className="left_side_image">
                            <img src={require('./Images/quality_assurance.png')} alt="" className="left_icon_image" />
                        </div>
                        <div className="right_side_content">
                            <h4 className="sub-section-heading">Quality Assurance</h4>
                            <p className="sub-section-content">We take pride in the quality of our products. Our team meticulously 
                            selects fresh produce from local farmers, ensuring that you receive nothing but the best. Every fruit 
                            and vegetable is carefully inspected to meet our high standards of freshness and taste.</p>
                        </div>    
                    </div>
                    <div className="sub-section flex_box padding_style">
                        <div className="left_side_image">
                            <img src={require('./Images/locally-sourced.png')} alt="" className="left_icon_image" />
                        </div>
                        <div className="right_side_content">
                            <h4 className="sub-section-heading">Locally Sourced</h4>
                            <p className="sub-section-content">Supporting local farmers is at the heart of what we do. 
                            By sourcing our produce locally, we not only contribute to the growth of our communities but 
                            also reduce the carbon footprint associated with transportation.</p>
                        </div>    
                    </div>
                </div>
                <div className="flex_box">
                    <div className="sub-section flex_box padding_style">
                        <div className="left_side_image">
                            <img src={require('./Images/health_insurance_advocate.webp')} alt="" className="left_icon_image" />
                        </div>
                        <div className="right_side_content">
                            <h4 className="sub-section-heading">Healthy Living Advocates</h4>
                            <p className="sub-section-content">We are more than just a fruits and vegetables supplier; we are 
                            advocates for healthy living. Our team includes nutrition experts who are dedicated to providing you 
                            with valuable insights and guidance on incorporating nutritious choices into your daily life.</p>
                        </div>  
                    </div>
                    <div className="sub-section flex_box padding_style">
                        <div className="left_side_image">
                            <img src={require('./Images/substainability_commitment.png')} alt="" className="left_icon_image" />
                        </div>
                        <div className="right_side_content">
                            <h4 className="sub-section-heading">Sustainability Commitment</h4>
                            <p className="sub-section-content">Fruits and Roots is committed to sustainable practices. 
                            From eco-friendly packaging to waste reduction initiatives, we are continuously working towards 
                            minimizing our environmental impact and promoting a greener future.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="sub-heading">Our Team</h3>
                <div className='flex_box'>
                    <div className="left_image_div">
                        <img src={require('./Images/our_team.jpg')} alt="" title="image" className="left_image"/>
                    </div>
                    <div className='right_content_div'>
                        <p className="content">Meet the passionate individuals behind Fruits and Roots. Our team is driven by a shared commitment 
                        to wellness, sustainability, and customer satisfaction. We are here to ensure that your experience with us is nothing short 
                        of exceptional.</p>
                    </div>
                </div>
            </div>
            <footer className='footer_content'>
                <h3 className="sub-heading">Contact Us</h3>
                <p className="content">Have questions, suggestions, or just want to say hello? We'd love to hear from you! 
                Feel free to reach out to our customer support team, and we'll be happy to assist you.</p>
                <div className="contact_body">
                    <div className="card card_left">
                        <div className="card-body">
                            <div className="info">
                                <div className="info_icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="info_content">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_icon">
                                    <i className='bx bx-envelope'></i>
                                </div>
                                <div className="info_content">
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_icon">
                                    <i className="bi bi-phone"></i>
                                </div>
                                <div className="info_content">
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6048.722892647557!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1706112537466!5m2!1sen!2sus" width="340" height="360" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                        </div>
                    </div>
                    <div className="card card_right">
                        <div className="card-body">
                            <div className="form_row1">
                                <div className="form_row1_left">
                                    <label >Your Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="form_row1_right">
                                    <label >Your Email</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="sub">
                                <label >Subject</label>
                                <input type="text" className="sub_input"/>
                            </div>
                            <div className="msg">
                                <label >Message</label>
                                <textarea rows="10" cols="62"></textarea>
                            </div>
                            <button type="submit" className="submit_button">Send Message</button>
                        </div>
                    </div>
                </div>
                <p className="content">Join us on this journey towards a healthier, more sustainable future. Thank you for 
                choosing Fruits and Roots for your fresh and flavorful needs.</p>
            </footer>
        </div>
    )
}

export default About