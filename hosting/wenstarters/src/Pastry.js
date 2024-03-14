import React, { useState } from 'react';
import RatingIcon from './RatingIcon';
import './Card.css'
import { useDispatch } from 'react-redux';
import { getData } from './Reducer';

const pastries=[
    {
      image:"eggnog_panna_cotta_with_spiked_cranberry_sauce",
      name:"Eggnog panna cotta cranberry",
      rating:5,
      price:250,
      quantity:1
    },
    {
      image:"caramel_profiterole",
      name:"Caramel profiterole",
      rating:5,
      price:280,
      quantity:1
    },
    {
      image:"black_forest_mini_cakes",
      name:"Black forest mini cakes",
      rating:5,
      price:300,
      quantity:1
    },
    {
      image:"blue_cheese_walnut_and_thyme_pull_apart_puff_pastry_twirl",
      name:"Blue cheese walnut pull apart twirl",
      rating:5,
      price:270,
      quantity:1
    },
    {
      image:"blueberry_cheesecake",
      name:"Blueberry cheesecake",
      rating:5,
      price:300,
      quantity:1
    },
    {
      image:"caramelized_onion_spinach_and_cheddar_flaky",
      name:"caramelized onion spinach cheddar",
      rating:5,
      price:250,
      quantity:1
    },
    {
      image:"chocolate_cake_with_strawberry_filling",
      name:"Chocolate cake with strawberry",
      rating:4.8,
      price:280,
      quantity:1
    },
    {
      image:"chocolate_gingerbread_mini_cakes",
      name:"Chocolate mini gingerbread",
      rating:4.8,
      price:270,
      quantity:1
    },
    {
      image:"chocolate_mini_tarts",
      name:"Chocolate mini tarts",
      rating:4.8,
      price:280,
      quantity:1
    },
    {
      image:"christmas_vegan_gluten_free_dessert",
      name:"Christmas vegan gluten free dessert",
      rating:4.9,
      price:290,
      quantity:1
    },
    {
      image:"eggnog_cake",
      name:"Eggnog Cake",
      rating:4.9,
      price:300,
      quantity:1
    },
    {
      image:"everything_bacon_apple_breakfast_biscuits",
      name:"Bacon apple breakfast biscuits",
      rating:4,
      price:230,
      quantity:1
    },
    {
      image:"hazelnut_and_chocolate_hazelnut_cake",
      name:"Hazelnut and chocolate hazelnut",
      rating:4,
      price:270,
      quantity:1
    },
    {
      image:"mini_dessert_cups",
      name:"Mini dessert cups",
      rating:4.9,
      price:290,
      quantity:1
    },
    {
      image:"mushroom_stuffed_potato_pancakes",
      name:"Mushroom stuffed potato pancakes",
      rating:5,
      price:260,
      quantity:1
    },
    {
      image:"new_york_cheesecake",
      name:"New york cheesecake",
      rating:5,
      price:300,
      quantity:1
    },
    {
      image:"no_bake_mini_lotus_biscoff_cheesecake",
      name:"No bake mini lotus biscoff cheesecake",
      rating:5,
      price:290,
      quantity:1
    },
    {
      image:"ottolenghi's_curried_cauliflower_cheese_filo_pie",
      name:"Ottolenghi's cheese filo pie",
      rating:3.8,
      price:240,
      quantity:1
    },
    {
      image:"pistachio_dacquoise",
      name:"Pistachio dacquoise",
      rating:3.9,
      price:250,
      quantity:1
    },
    {
      image:"potato_asiago_and_caramelized_onion_galette",
      name:"Potato asiago and caramelized onion",
      rating:4.5,
      price:260,
      quantity:1
    },
    {
      image:"ricotta_and_spinach_calzones",
      name:"Ricotta and spinach calzones",
      rating:4.5,
      price:270,
      quantity:1
    },
    {
      image:"sprinkle_bakes",
      name:"Sprinkle bakes",
      rating:4.5,
      price:280,
      quantity:1
    },
    {
      image:"whole_orange_cake",
      name:"Whole orange cake",
      rating:5,
      price:300,
      quantity:1
    },
    {
      image:"winter_celebration_cake",
      name:"Winter celebration cake",
      rating:5,
      price:300,
      quantity:1
    }
  ]

const Pastry=()=>{

  const [orderstatus,setOrderStatus]=useState([])

  const dispatch=useDispatch()

  const order=(index,pastry)=>{
    setOrderStatus([...orderstatus,index])
    console.log(orderstatus)
    dispatch(getData(pastry))
  }

    return(
        <div className="cards">
            {pastries.map((pastry,index)=>(
                <div key={index} className="Card">
                    <div className="card_image">
                        <img src={require(`./Image/${pastry.image}.jpg`)} alt="" />
                        {(orderstatus.includes(index)) && <div className="Ordered"><p>Ordered</p></div>}
                    </div>
                    <h2 className="pro_name">{pastry.name}</h2>
                    <h4 className="pro_price">Rs.{pastry.price}</h4>
                    <RatingIcon rating={pastry.rating}/>
                    <div className="card_button"><button onClick={()=>{order(index,pastry)}}>Order</button></div>
                </div>
            ))}
        </div>
    )
}

export default Pastry;
