import React, {useState } from 'react';
import RatingIcon from './RatingIcon';
import './Card.css'
import { useDispatch } from 'react-redux';
import { getData } from './Reducer';

const drinks=[
    {
      image:"blackberry_thyme_lemonade",
      name:"Blackberry thyme lemonade",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"pomegranate_and_rosemary_gin_fizz",
      name:"Pomegranate and rosemary gin fizz",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"blue_mojito",
      name:"Blue mojito",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"chocolate_milkshake",
      name:"Chocolate milkshake",
      rating:5,
      price:55,
      quantity:1
    },
    {
      image:"coffee",
      name:"Coffee",
      rating:4.5,
      price:45,
      quantity:1
    },
    {
      image:"coffee_slices_with_hazelnut_praline_and_dark_chocolate_ganache",
      name:"Coffee slices with hazelnut praline",
      rating:4.5,
      price:65,
      quantity:1
    },
    {
      image:"cucumber_gin_gizz_with_basil_and_mint",
      name:"Cucumber gin gizz with basil and mint",
      rating:3.9,
      price:70,
      quantity:1
    },
    {
      image:"delicious_watermelon",
      name:"Delicious watermelon",
      rating:3.9,
      price:55,
      quantity:1
    },
    {
      image:"dragon_fruit_smoothie",
      name:"Dragon fruit smoothie",
      rating:4.2,
      price:70,
      quantity:1
    },
    {
      image:"fresh_coconut_water",
      name:"Fresh coconut water",
      rating:5,
      price:40,
      quantity:1
    },
    {
      image:"fresh_orange",
      name:"Fresh orange",
      rating:5,
      price:50,
      quantity:1
    },
    {
      image:"frozen_orange_prosecco",
      name:"Frozen orange prosecco",
      rating:5,
      price:75,
      quantity:1
    },
    {
      image:"green_kiwi_smoothie",
      name:"Green kiwi smoothie",
      rating:4.9,
      price:70,
      quantity:1
    },
    {
      image:"healthy_carrot",
      name:"Healthy carrot",
      rating:3.9,
      price:55,
      quantity:1
    },
    {
      image:"island_iced_tea",
      name:"Island iced tea",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"mojito",
      name:"Mojito",
      rating:5,
      price:30,
      quantity:1
    },
    {
      image:"orange_coconut_milkshake",
      name:"Orange coconut milkshake",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"panna_cotta_with_strawberry_coulis_from_bologna_italy",
      name:"Panna cotta with strawberry coulis",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"perfect_tomato",
      name:"Perfect tomato",
      rating:4.6,
      price:55,
      quantity:1
    },
    {
      image:"pineapple_cocktail",
      name:"Pineapple cocktail",
      rating:5,
      price:60,
      quantity:1
    },
    {
      image:"strawberry_cheesecake_smoothie",
      name:"Strawberry smoothie",
      rating:5,
      price:70,
      quantity:1
    },
    {
      image:"vanilla_panna_cotta_with_raspberries_and_strawberries",
      name:"Vanilla panna cotta with berries",
      rating:5,
      price:65,
      quantity:1
    },
    {
      image:"vanilla_strawberry_iced_tea",
      name:"Vanilla strawberry iced tea",
      rating:4.8,
      price:60,
      quantity:1
    },
    {
      image:"vegan_mango_lassi",
      name:"Vegan mango lassi",
      rating:5,
      price:65,
      quantity:1
    }
  ]

const Drinks=()=>{

  const [orderstatus,setOrderStatus]=useState([])

  const dispatch=useDispatch()

  const order=(index,drink)=>{

      // Add the index of the ordered item to orderstatus
      setOrderStatus([...orderstatus,index])
      
      // Dispatch the ordered drink data
        dispatch(getData(drink))
    
  }

    return(
        <div className="cards">
            {drinks.map((drink,index)=>(               
                <div key={index} className="Card">
                    <div className="card_image">
                        <img src={require(`./Image/${drink.image}.jpg`)} alt="" />
                        {(orderstatus.includes(index)) && <div className="Ordered"><p>Ordered</p></div>}
                    </div>
                    <h2 className="pro_name">{drink.name}</h2>
                    <h4 className="pro_price">Rs.{drink.price}</h4>
                    <RatingIcon rating={drink.rating}/>
                    <div className="card_button"><button onClick={()=>{order(index,drink)}}>Order</button></div>
                    {/* if the item is ordered then Ordered will be displayed otherwise it remains the same */}
                </div>
            ))}
        </div>
    )
}

export default Drinks;