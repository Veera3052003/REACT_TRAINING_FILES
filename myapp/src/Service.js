import React from 'react'
import './Service.css'

function Service(){
    return(
        <div className="service_page">
            <div className="section">
                <h1 className="welcome">Our Services</h1>
                <div className="move_to_center">
                    <iframe src="https://assets.pinterest.com/ext/embed.html?id=1026680046286476386" height="330" width="600" frameBorder="0" scrolling="no" title="video"></iframe>                    {/* <div className='rotate_border'></div> */}
                </div>
                <p className="content">Welcome to Fruits and Roots, your one-stop destination for fresh and organic produce. 
                We take pride in offering a range of services to make your experience with us delightful and convenient.</p>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">1. Fresh Produce Selection</h3>
                <div className='flex_box'>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZuzZXT3A1aQ?si=1ZA2hZJL3Yke1KBN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='right_content_div'>
                        <p className="content">Explore our diverse selection of fresh fruits and vegetables sourced directly from local farms. 
                        We prioritize quality, ensuring that you receive the finest produce to support a healthy lifestyle.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">2. Customized Fruit Baskets</h3>
                <div className="move_to_center">
                    <img src={require('./Images/customized_fruit_baskets.jpg')} alt="" className="center_image"/>
                </div>
                <p className="content">Celebrate special occasions or express your care with our customizable fruit baskets. 
                Choose from a variety of fruits to create a unique and thoughtful gift for your loved ones.</p>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">3. Weekly Subscription Boxes</h3>
                <div className="flex_box">
                    <div className='left_content_div'>
                        <p className="content">Never run out of healthy options with our weekly subscription boxes. Tailored to your preferences, 
                        these boxes are packed with a variety of fruits and vegetables to keep your kitchen stocked with goodness.</p>
                    </div>
                    <div className="right_content_div">
                        <img src={require('./Images/weekly_subscription_boxes.jpg')} alt="" className="right_image"/>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">4. Nutritional Guidance</h3>
                <div className='flex_box'>
                    <div className="left_image_div">
                        <img src={require('./Images/nutritional_guidance.jpg')} alt="" title="image" className="left_image"/>
                    </div>
                    <div className='right_content_div'>
                        <p className="content">Our team of nutrition experts is here to provide guidance on the health benefits of different fruits 
                        and vegetables. Learn how to make the most of our offerings for a well-balanced diet.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">5. Recipes and Meal Plans</h3>
                <p className="content">Discover delicious recipes and meal plans designed to incorporate a variety of fruits and vegetables 
                into your daily routine. We believe in making healthy eating enjoyable and accessible.</p>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">6. Express Delivery</h3>
                <div className="flex_box">
                    <div className='left_content_div'>
                        <p className="content">Experience the convenience of doorstep delivery with our express delivery service. We ensure that your 
                        fresh produce reaches you in the shortest possible time, maintaining its quality and freshness.</p>
                    </div>
                    <div className="right_content_div">
                        <img src={require('./Images/express_delivery.jpg')} alt="" className="right_image"/>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">7. Educational Workshops</h3>
                <div className="move_to_center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xhgqisPc1dw?si=UThbGunZ-HQvItYR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                </div>
                <p className="content">Join our educational workshops and learn more about the nutritional value of fruits and vegetables. 
                Stay informed about the latest trends in healthy living and wellness.</p>
            </div>
            <div className="section">
                <h3 className="services_sub-heading">8. Sustainability Initiatives</h3>
                <p className="content">At Fruits and Roots, we are committed to sustainability. 
                Learn about our eco-friendly practices and initiatives aimed at reducing our environmental impact.</p>
                <div className="move_to_center">
                    <img src={require('./Images/sustainability_initiative.jpg')} alt="" className="center_image"/>
                </div>
            </div>
            <footer className='footer_content'>
                <p>Choose Fruits and Roots for an unparalleled experience in quality, freshness, and customer satisfaction. 
                We are dedicated to promoting a healthy lifestyle through our services. If you have any inquiries or specific requests, feel 
                free to reach out to our customer support team.</p>
            </footer>
        </div>
    )
}

export default Service