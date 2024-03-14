import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Card.css"


function Card() {
    const [data,setData]=useState([])
    //crud - post(frontend- backend) get(backend - frontend) update(changing the existing data) delete(deleting the data)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
        // console.log(data.data)
        setData(data.data)
    })
    // .catch(error=>{
    //     console.log(error);
    //     });
    },[])
    // console.log(data,'------------------>data')
    const arrValue=data.map((item)=>{
        // console.log(item)
        return(
            <div className='card'>
                <h1 className='card_heading'>{item.title}</h1>
                <p className='card_body'>{item.body}</p>
            </div> 
        )
    })
    return (
    <div>
        {arrValue}
    </div>
  )
}

export default Card


