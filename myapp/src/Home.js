import React from 'react'
import "./Home.css"

function Home(){
    return(
        <div className="home_page">
            <div className="section">
                <h1 className="welcome">Welcome to Roots & Fruits</h1>
                <div className="move_to_center">
                    <img src={require('./Images/welcome_image_card.jpeg')} className='welcome_image_card' alt=""/>
                    {/* <div className='rotate_border'></div> */}
                </div>
                <p className="content">At Fruits and Roots, we believe in the goodness of nature and
                 the vibrant, wholesome flavors it offers. Welcome to our online marketplace,
                  where we bring you the freshest and finest fruits and vegetables to your doorstep.
                </p>
            </div>
            <div className="section">
                <h3 className="sub-heading">Explore Nature's Bounty</h3>
                <div className=" flex_box">
                    <div>
                        <iframe src="https://assets.pinterest.com/ext/embed.html?id=44121271342258034" height="520" width="500" frameBorder="0" scrolling="no" title="video"></iframe>
                    </div>
                    <div className="right_content_div">
                        <p className="content right_content">Discover a cornucopia of colors and flavors as you browse through 
                        our extensive collection of fruits and vegetables. From succulent berries 
                        to crisp greens and exotic roots, we source only the best, ensuring that 
                        every bite is a celebration of nature's bounty.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="sub-heading">Farm-Fresh Delights</h3>
                <div className="move_video_to_center">
                    <iframe src="https://assets.pinterest.com/ext/embed.html?id=684054630926482772" height="438" width="600" frameBorder="0" scrolling="no" title="video"></iframe>
                </div>
                <p className="content">Our commitment to quality is unwavering. We work directly with 
                local farmers and trusted suppliers to bring you farm-fresh produce. 
                Say goodbye to artificial additives and hello to real, unadulterated goodness.</p>
            </div>
            <div className="section">
                <h3 className="sub-heading">Healthy Living Starts Here</h3>
                <div className=" flex_box">
                    <div className="left_content_div">
                        <img src={require('./Images/healthy_living_starts_here.jpg')} alt="" className="left_content_image"/>
                    </div>
                    <div className="right_content_div">
                        <p className="content right_content">At Fruits and Roots, we believe in the power of a healthy lifestyle. 
                        Whether you're a seasoned health enthusiast or just starting your wellness journey, 
                        our selection of nutritious fruits and vegetables is here to support your goals.</p>
                    </div>
                </div>              
            </div>
            <div className="section">
                <h3 className="sub-heading">Seasonal Specials and Recipes</h3>
                <p className="content">Embrace the seasons with our curated selection of seasonal specials. Explore 
                our recipe section for inspiration on how to turn our fresh ingredients into delicious, 
                wholesome meals. We believe that cooking is an art, and we're here to provide you with 
                the finest ingredients for your culinary creations.</p>
            </div>
            <div className="section">
                <h3 className="sub-heading">Start Your Journey with Fruits and Roots</h3>
                <p className="content">Embark on a journey of flavor, health, and sustainability with Fruits and Roots. 
                Your trusted source for the freshest fruits and vegetables awaits you. Let's celebrate 
                the goodness of nature together!</p>
                <div className="move_video_to_center">
                    <img src={require('./Images/start_your_journey_with_fruits_and_roots.jpg')} alt="" className="center_image"/>
                </div>
            </div>       
        </div>
    )
}

export default Home