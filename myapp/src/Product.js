import "./App.css";
import { getData } from "./Reducer";
import Vegetables from "./Vegetable"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

const vegetables=[
    {
        name:"Tomato",
        price:'1kg 60Rs',
        image:'tomato'
    },
    {
        name:"Carrot",
        price:'1kg 60Rs',
        image:'carrot'
    },
    {
        name:"Potato",
        price:'1kg 60Rs',
        image:'potato'
    },
    {
        name:"Beetroot",
        price:'1kg 60Rs',
        image:'beetroot'
    },
    {
        name:"Mushroom",
        price:'1kg 60Rs',
        image:'mushroom'
    },
    {
        name:"Peas",
        price:'1kg 60Rs',
        image:'peas'
    },
    {
        name:"Chilly",
        price:'1kg 60Rs',
        image:'chilli'
    },
    {
        name:"Yam",
        price:'1kg 60Rs',
        image:'yam'
    },
    {
        name:"Cauliflower",
        price:'1kg 60Rs',
        image:'cauliflower'
    },
    {
        name:"Corn",
        price:'1kg 60Rs',
        image:'corn'
    },
    {
        name:"Ginger",
        price:'1kg 60Rs',
        image:'ginger'
    },
    {
        name:"Green Capsicum",
        price:'1kg 60Rs',
        image:'green_capsicum'
    },
    {
        name:"Red Capsicum",
        price:'1kg 60Rs',
        image:'red_capsicum'
    },
    {
        name:"Yellow Capsicum",
        price:'1kg 60Rs',
        image:'yellow_capsicum'
    },
    {
        name:"Redwing Onion",
        price:'1kg 60Rs',
        image:'redwing_onion'
    },
    {
        name:"Shallot",
        price:'1kg 60Rs',
        image:'shallot'
    },
    {
        name:"Torpedo onion",
        price:'1kg 60Rs',
        image:'torpedo_onion'
    },
    {
        name:"White Onion",
        price:'1kg 60Rs',
        image:'white_onion'
    }
]
// const Datarec=(value,name)=>{
    // console.log(value,name)
//     alert(value,name)
// }


const Product=()=>{
    const dispatch=useDispatch()
    // const [vegetable,setVegetable]=useState('')
    const vegData=useSelector((state)=>{
        return state.DataReducer.orderedData
    })
    const [status,setStatus]=useState(false)
    const Datarec=(value)=>{
        dispatch(getData(value))
        // console.log(vegetable)
        // setVegetable(value)
    }
    const orderedValue=vegData.map((item)=>{
        return(
            <h1>{item}</h1>
        )
    })
    //useEffect(callback,dependencies)
    useEffect(()=>{
        console.log('yes')
    },[status]) //[] Implies executes only at the start of the rendering of the web page  [status] which works whenever the status executes
    
    return(
        <>
            <button className='show_button' onClick={()=>{setStatus(true)}}>Show</button>
            {
                (status)&&orderedValue    
            }
            <div className='cards'>
            {
                <Vegetables data={vegetables} funcSend={Datarec}/>
            }
                
            </div>
        </>
    ) 
}
export default Product