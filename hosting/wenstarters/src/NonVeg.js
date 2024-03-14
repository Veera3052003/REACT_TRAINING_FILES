import React, { useState } from 'react'
import RatingIcon from './RatingIcon'
import './Card.css'
import { useDispatch } from 'react-redux'
import { getData } from './Reducer'


const non_vegs=[
    {
      image:"baja_prwan_and_sweetcorn_fritters_with_mango_and_jalapeno_salsa",
      name:"Baja prawn sweetcorn fritters",
      rating:5,
      price:200,
      quantity:1
    },
    {
      image:"tamarind_of_mayfair",
      name:"Tamarind of myfair",
      rating:5,
      price:220,
      quantity:1
    },
    {
      image:"baked_stuffed_lobster_with_shrimp",
      name:"Baked stuffed lobster shrimp",
      rating:5,
      price:250,
      quantity:1
    },
    {
      image:"bengali_dimer_devil_recipe",
      name:"Bengali dimer devil recipe",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"burmese_egg_bhejo",
      name:"Burmese egg bhejo",
      rating:5,
      price:160,
      quantity:1
    },
    {
      image:"chicken_angara_kebab",
      name:"Chicken angara kebab",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"chicken_cutlet",
      name:"Chicken cutlet",
      rating:5,
      price:150,
      quantity:1
    },
    {
      image:"chicken_lollipop",
      name:"Chicken lollipop",
      rating:5,
      price:170,
      quantity:1
    },
    {
      image:"chicken_rogan_josh",
      name:"Chicken rogan josh",
      rating:5,
      price:340,
      quantity:1
    },
    {
      image:"chicken_swiss_roll",
      name:"Chicken swiss roll",
      rating:5,
      price:190,
      quantity:1
    },
    {
      image:"chilli_fried_prawns",
      name:"Chilli fried prawns",
      rating:5,
      price:220,
      quantity:1
    },
    {
      image:"chimichurri_chicken_bites",
      name:"Chimichurri chicken bites",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"crispy_fish_finger",
      name:"Crispy fish finger",
      rating:5,
      price:160,
      quantity:1
    },
    {
      image:"ebi_furai",
      name:"Ebi furai",
      rating:5,
      price:210,
      quantity:1
    },
    {
      image:"fried_chicken",
      name:"Fried chicken",
      rating:5,
      price:170,
      quantity:1
    },
    {
      image:"kanava_roast",
      name:"Kanava roast",
      rating:5,
      price:190,
      quantity:1
    },
    {
      image:"kerala_fish_fry",
      name:"Kerala fish fry",
      rating:5,
      price:180,
      quantity:1
    },
    {
      image:"kurkure_soya_chap",
      name:"Kurkure soya chap",
      rating:5,
      price:150,
      quantity:1
    },
    {
      image:"mangalorean_chicken_ghee_roast",
      name:"Mangalorean chicken ghee roast",
      rating:5,
      price:220,
      quantity:1
    },
    {
      image:"prawn_with_sweet_and_sticky_honey_glaze",
      name:"Prawn sweet and sticky honey glaze",
      rating:5,
      price:230,
      quantity:1
    },
    {
      image:"risotto_rice_balls",
      name:"Risotto rice balls",
      rating:5,
      price:200,
      quantity:1
    },
    {
      image:"shrimp_stuffed_squid",
      name:"Shrimp stuffed squid",
      rating:5,
      price:240,
      quantity:1
    },
    {
      image:"stuffed_squid_with_rice_plus_vegetables",
      name:"Stuffed squid with rice vegetables",
      rating:5,
      price:250,
      quantity:1
    },
    {
      image:"tandoori",
      name:"Tandoori",
      rating:5,
      price:180,
      quantity:1
    }
]

const NonVeg=()=>{

  const [orderstatus,setOrderStatus]=useState([])

  const dispatch=useDispatch()

  const order=(index,non_veg)=>{
    setOrderStatus([...orderstatus,index])
    console.log(orderstatus)
    dispatch((getData(non_veg)))
  }

    return(
        <div className="cards">
            {non_vegs.map((non_veg,index)=>(
                <div key={index} className='Card'>
                    <div className="card_image">
                        <img src={require(`./Image/${non_veg.image}.jpg`)} alt="" />
                        {(orderstatus.includes(index))&&<div className='Ordered'><p>Ordered</p></div>}
                    </div>
                    <h2 className="pro_name">{non_veg.name}</h2>
                    <h4 className="pro_price">Rs.{non_veg.price}</h4>
                    <RatingIcon rating={non_veg.rating} />
                    <div className="card_button"><button onClick={()=>{order(index,non_veg)}}>Order</button></div>
                </div>               
            ))}
        </div>
    )
}

export default NonVeg