import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
// import './animation'

//rfec -> react functional export component

function UncontrolledExample() {

  return (
    <div>
      <section className="outer_div sec-1 show-animate">
        <Carousel interval={2000} className="animate">
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/blueberry_cheesecake.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Pastry</h3>
              <p className="carousel_para">Sweeten Your Day, One Bite at a Time!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/panna_cotta_with_strawberry_coulis_from_bologna_italy.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Drinks</h3>
              <p className="carousel_para">Sip into Freshness, Savor Every Drop</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/corn_paneer_cutlet.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Vegetarian Starters</h3>
              <p className="carousel_para">Green Delights for Every Bite!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/mangalorean_chicken_ghee_roast.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Non-Vegetarian Starters</h3>
              <p className="carousel_para">Sizzle, Bite, Delight: Non-Veg Goodness Done Right!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/peanut_butter_chocoalte_texas_sheet_cake.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Pizza</h3>
              <p className="carousel_para">Slice of Happiness, Every Time!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_item">
            <img src={require('./Image/rainbow_breakfast_bowl_with_blueberry_chia_pudding.jpg')} alt="" className="carousel_image" />
            <Carousel.Caption>
              <h1 className="carousel_main_header">WenStarters</h1>
              <h3 className="carousel_header">Fruit Salads</h3>
              <p className="carousel_para">Freshness in Every Forkful!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <div className="card">
          <div>
            <h2>🎉 Special Offer! 🎉</h2>
            <p>For a limited time only, get 20% off on all products!</p>
            <p>Hurry up and grab your favorites before the offer ends!</p>
          </div>
          <div className="card_background_image">
          </div>
        </div>
      </section>
    </div>
  );
}

function Home() {
  return (
    <div>
      <UncontrolledExample/>
    </div>
  )
}

export default Home
