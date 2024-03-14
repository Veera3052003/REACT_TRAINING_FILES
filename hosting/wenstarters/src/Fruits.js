import React, { useState } from 'react';
import RatingIcon from './RatingIcon';
import './Card.css'
import {getData} from './Reducer'
import { useDispatch } from 'react-redux';

const fruits=[
    {
      image:"fruit_martini",
      name:"Fruit martini",
      rating:5,
      price:40,
      quantity:1
    },
    {
      image:"pomegranate_mousse_parafait",
      name:"Pomegranate mousse parafait",
      rating:5,
      price:45,
      quantity:1
    },
    {
      image:"classic_fruit_tarts",
      name:"Classic fruit tarts",
      rating:5,
      price:55,
      quantity:1
    },
    {
      image:"easy_mixed_fruits_in_cream_dessert",
      name:"Mixed fruits in cream dessert",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"easy_yogurt_and_fruit_granola_parfaits",
      name:"Yogurt and fruit granola parfait",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"fresh_fruit_parfaits",
      name:"Fresh fruit parfaits",
      rating:5,
      price:70,
      quantity:1
    },
    {
      image:"fruit_custard",
      name:"Fruit custard",
      rating:5,
      price:75,
      quantity:1
    },
    {
      image:"fruit_salad_with_condensed_milk",
      name:"Fruit salad with condensed milk",
      rating:5,
      price:80,
      quantity:1
    },
    {
      image:"fruit_salad_with_cream",
      name:"Fruit salad with cream",
      rating:5,
      price:85,
      quantity:1
    },
    {
      image:"fruit_salad_with_orange_juice",
      name:"Fruit salad with orange juice",
      rating:5,
      price:90,
      quantity:1
    },
    {
      image:"fruit_waffle_cones",
      name:"Fruit waffle cones",
      rating:5,
      price:95,
      quantity:1
    },
    {
      image:"haupia_coconut_pudding_with_fresh_fruit",
      name:"Haupia coconut pudding",
      rating:5,
      price:90,
      quantity:1
    },
    {
      image:"mango_falooda",
      name:"Mango falooda",
      rating:5,
      price:100,
      quantity:1
    },
    {
      image:"parisian_fruit_tarts",
      name:"Parisian fruit tarts",
      rating:5,
      price:105,
      quantity:1
    },
    {
      image:"rainbow_breakfast_bowl_with_blueberry_chia_pudding",
      name:"Rainbow blueberry chia pudding",
      rating:5,
      price:110,
      quantity:1
    },
    {
      image:"raspberry_peach_popsicles",
      name:"Raspberry peach popsicles",
      rating:5,
      price:115,
      quantity:1
    },
    {
      image:"simple_and_easy_homemade_tropical_fruit_cups",
      name:"Homemade tropical fruit cups",
      rating:5,
      price:120,
      quantity:1
    },
    {
      image:"sparkling_fruit_salad_with_champagne_mimosa_dressing",
      name:"Sparkling salad champagne",
      rating:5,
      price:125,
      quantity:1
    },
    {
      image:"summer_berry_tarts",
      name:"Summer berry tarts",
      rating:5,
      price:130,
      quantity:1
    },
    {
      image:"summer_fruit_pops",
      name:"Summer fruit pops",
      rating:5,
      price:135,
      quantity:1
    },
    {
      image:"summer_fruit_salad",
      name:"Summer fruit salad",
      rating:5,
      price:140,
      quantity:1
    },
    {
      image:"tropical_fruit_salad_with_agave_lime_dressing",
      name:"Tropical fruit salad with agave lime",
      rating:5,
      price:145,
      quantity:1
    },
    {
      image:"tropical_rice_pudding",
      name:"Tropical rice pudding",
      rating:5,
      price:150,
      quantity:1
    }
]

const Fruits=()=>{
  
  const [orderstatus,setOrderStatus]=useState([])  //Declaring an empty here array in the useState as default value

  const dispatch=useDispatch()

  // In this useEffect function, In the setTimeout function, after the 1000seconds the setStatus is set to an empty array.

  //In this order function, the empty array status is unpacked and index is passed to the setStatus as parameters
  const order=(index,fruit)=>{
    setOrderStatus([...orderstatus,index])
    console.log(orderstatus)
    dispatch(getData(fruit))
  }

  return(
    <>
      <div className="cards">
        {fruits.map((fruit,index)=>(               
          <div key={index} className='Card'>
            <div className="card_image">
              <img src={require(`./Image/${fruit.image}.jpg`)} alt="" />
              {(orderstatus.includes(index)) && <div className="Ordered"><p>Ordered</p></div>}
            </div>
            <h2 className="pro_name">{fruit.name}</h2>
            <h4 className="pro_price">Rs.{fruit.price}</h4>
            <RatingIcon rating={fruit.rating}/>
            <div className="card_button"><button onClick={()=>{order(index,fruit)}}>Order</button></div>
                                                {/* passing the index value to the order function */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Fruits;