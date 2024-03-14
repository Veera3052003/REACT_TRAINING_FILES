import React, { useState } from 'react'
import RatingIcon from './RatingIcon'
import './Card.css'
import { useDispatch } from 'react-redux'
import { getData } from './Reducer'

//npm install @fortawesome/fontawesome-free -> Used 
//npm install react-bootstrap


const vegs=[
    {
      image:"achari_aloo_tikka",
      name:"Achari aloo tikka",
      rating:5,
      price:35,
      quantity:1
    },
    {
      image:"cheese_veg_fingers",
      name:"Cheese veg fingers",
      rating:5,
      price:40,
      quantity:1
    },
    {
      image:"asian_style_sweet_corn",
      name:"Asian style sweet corn",
      rating:5,
      price:45,
      quantity:1
    },
    {
      image:"broccoli_and_paneer_satay_in_red_pepper_sauce",
      name:"Broccoli paneer red pepper sauce",
      rating:5,
      price:50,
      quantity:1
    },
    {
      image:"corn_paneer_cutlet",
      name:"Corn paneer cutlet",
      rating:5,
      price:55,
      quantity:1
    },
    {
      image:"crispy_baby_corn_fry",
      name:"Crispy baby corn fry",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"kaanda_bhajiya",
      name:"Kaanda bhajiya",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"makhana_paneer_ball_foxnut_and_cottage_cheese_ball",
      name:"Makhana paneer ball foxnut",
      rating:5,
      price:70,
      quantity:1
    },
    {
      image:"matar_kebab",
      name:"Matar kebab",
      rating:5,
      price:75,
      quantity:1
    },
    {
      image:"mexican_canapes",
      name:"Mexican canapes",
      rating:5,
      price:80,
      quantity:1
    },
    {
      image:"mexican_pani_puri",
      name:"Mexican pani puri",
      rating:5,
      price:85,
      quantity:1
    },
    {
      image:"mini_mac_and_cheese_pies_and_a_virtual_baby_shower",
      name:"Mini mac cheese pies",
      rating:5,
      price:90,
      quantity:1
    },
    {
      image:"paneer_amritsari",
      name:"Paneer amritsari",
      rating:5,
      price:95,
      quantity:1
    },
    {
      image:"paneer_papad_fingers",
      name:"Paneer papad fingers",
      rating:5,
      price:100,
      quantity:1
    },
    {
      image:"paneer_potli",
      name:"Paneer potli",
      rating:5,
      price:110,
      quantity:1
    },
    {
      image:"paneer_tikka_corn_chaat",
      name:"Paneer tikka corn chaat",
      rating:5,
      price:115,
      quantity:1
    },
    {
      image:"pipette_skewers",
      name:"Pipette skewers",
      rating:5,
      price:120,
      quantity:1
    },
    {
      image:"smashed_potatoes_chaat",
      name:"Smashed potatoes chaat",
      rating:5,
      price:125,
      quantity:1
    },
    {
      image:"spiced_potato_puff_pastry_baskets",
      name:"Spiced potato puff pastry baskets",
      rating:5,
      price:130,
      quantity:1
    },
    {
      image:"tandoori_aloo",
      name:"Tandoori aloo",
      rating:5,
      price:135,
      quantity:1
    },
    {
      image:"tandoori_stuffed_mushroom_tikka",
      name:"Tandoori stuffed mushroom tikka",
      rating:5,
      price:140,
      quantity:1
    },
    {
      image:"veg_hariyali_kebabs",
      name:"Veg hariyali kebabas",
      rating:5,
      price:145,
      quantity:1
    },
    {
      image:"veg_lollipop",
      name:"Veg lollipop",
      rating:5,
      price:145,
      quantity:1
    },
    {
      image:"veg_pizza_basket",
      name:"Veg pizza basket",
      rating:5,
      price:150,
      quantity:1
    }
  ]

const Veg=()=>{

  const [orderstatus,setOrderStatus]=useState([])

  const dispatch=useDispatch()

  const order=(index,veg)=>{
    setOrderStatus([...orderstatus,index])
    console.log(orderstatus)
    dispatch(getData(veg))
  }

    return(
        <div className="cards">
            {vegs.map((veg,index)=>(                
                <div key={index} className="Card">
                    <div className="card_image">
                        <img src={require(`./Image/${veg.image}.jpg`)} alt="" />
                        {(orderstatus.includes(index)) && <div className="Ordered"><p>Ordered</p></div>}
                    </div>
                    <h2 className="pro_name">{veg.name}</h2>
                    <h4 className="pro_price">Rs.{veg.price}</h4>
                    <RatingIcon rating={veg.rating} />
                    <div className="card_button"><button onClick={()=>{order(index,veg)}}>Order</button></div>
                </div>
            ))}
        </div>
    )
}

export default Veg;