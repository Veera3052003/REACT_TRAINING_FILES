import React, { useState } from 'react'
import RatingIcon from './RatingIcon'
import './Card.css'
import { useDispatch } from 'react-redux'
import { getData } from './Reducer'

const pizzas=[
    {
      image:"bbq_pulled_chicken_with_grilled_corn_grilled_scallions_bacons_and_pepperjack",
      name:"BBQ chicken grilled corn scallions",
      rating:5,
      price:250,
      quantity:1
    },
    {
      image:"couple_kulhad_pizza",
      name:"Couple kulhad pizza",
      rating:5,
      price:230,
      quantity:1
    },
    {
      image:"bbq_chicken",
      name:"BBQ chicken",
      rating:5,
      price:210,
      quantity:1
    },
    {
      image:"beer_brat_and_caramelized_onion",
      name:"Beer brat and caramelized onion",
      rating:5,
      price:230,
      quantity:1
    },
    {
      image:"capsicum",
      name:"capsicum",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"charred_mexican_street_corn_flatbread",
      name:"Charred mexican street corn",
      rating:5,
      price:170,
      quantity:1
    },
    {
      image:"cheesy_corns_discs",
      name:"Cheesy corns discs",
      rating:5,
      price:110,
      quantity:1
    },
    {
      image:"easy_meatball",
      name:"Easy meatball",
      rating:5,
      price:190,
      quantity:1
    },
    {
      image:"mushroom_pizza_with_fresh_herbs",
      name:"Mushroom pizza with fresh herbs",
      rating:5,
      price:190,
      quantity:1
    },
    {
      image:"nashville_hot_chicken",
      name:"Nashville hot chicken",
      rating:5,
      price:220,
      quantity:1
    },
    {
      image:"paneer_capsicum_corn_cheese",
      name:"Paneer capsicum corn cheese",
      rating:5,
      price:210,
      quantity:1
    },
    {
      image:"panneer",
      name:"panneer",
      rating:5,
      price:100,
      quantity:1
    },
    {
      image:"peanut_butter_chocoalte_texas_sheet_cake",
      name:"Peanut butter chocoalte texas",
      rating:5,
      price:210,
      quantity:1
    },
    {
      image:"pepperoni_pizza_pulla_apart_bread",
      name:"Pepperoni pizza pulla apart bread",
      rating:5,
      price:150,
      quantity:1
    },
    {
      image:"pineapple_pulled_pork_with_bacon_jalapenos_and_cilantro",
      name:"Pineapple pork bacon jalapenos",
      rating:5,
      price:230,
      quantity:1
    },
    {
      image:"pull_apart_cheesy_pizza_bread",
      name:"Pull apart cheesy pizza bread",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"sausage_apple_and_thyme_breakfast",
      name:"Sausage apple and thyme breakfast",
      rating:5,
      price:160,
      quantity:1
    },
    {
      image:"sicilian_pizza_with_sausage_and_peppers",
      name:"Sicilian pizza with sausage peppers",
      rating:5,
      price:190,
      quantity:1
    },
    {
      image:"spaghetti_and_meatball",
      name:"Spaghetti and meatball",
      rating:5,
      price:195,
      quantity:1
    },
    {
      image:"spinach_and_bacon_quiche_with_sweet_potato_crust",
      name:"Spinach and bacon quiche sweet crust",
      rating:5,
      price:150,
      quantity:1
    },
    {
      image:"white_garlic_mushroom",
      name:"White garlic mushroom",
      rating:5,
      price:120,
      quantity:1
    },
    {
      image:"white_pizza_with_spinach_and_garlic",
      name:"White pizza with spinach and garlic",
      rating:5,
      price:110,
      quantity:1
    }
  ]

const Pizza=()=>{

  const [orderstatus,setOrderStatus]=useState([])

  const dispatch=useDispatch()

  const order=(index,pizza)=>{
    setOrderStatus([...orderstatus,index])
    console.log(orderstatus)
    dispatch(getData(pizza))
  }

    return(
        <div className="cards">
            {pizzas.map((pizza,index)=>(                
                <div key={index} className="Card">
                    <div className="card_image">
                        <img src={require(`./Image/${pizza.image}.jpg`)} alt="" />
                        {(orderstatus.includes(index)) && <div className="Ordered"><p>Ordered</p></div>}
                    </div>
                    <h2 className="pro_name">{pizza.name}</h2>
                    <h4 className="pro_price">Rs.{pizza.price}</h4>
                    <RatingIcon rating={pizza.rating}/>
                    <div className="card_button"><button onClick={()=>{order(index,pizza)}}>Order</button></div>
                </div>              
            ))}
        </div>
    )
}

export default Pizza;