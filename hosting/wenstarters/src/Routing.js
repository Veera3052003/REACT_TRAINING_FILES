import Home from './Home'
import About from './About'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import Drinks from './Drinks'
import Pastry from './Pastry'
import Fruits from './Fruits'
import Pizza from './Pizza'
import Veg from './Veg'
import NonVeg from './NonVeg'
import Order_placed from './Order_placed'

const Routing=()=>{
    return(
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/About" Component={About}></Route>
            <Route path="/Cart" Component={Cart}></Route>
            <Route path="/Starter/Drinks" Component={Drinks}></Route>
            <Route path="/Starter/Fruits" Component={Fruits}></Route>
            <Route path="/Starter/Pastry" Component={Pastry}></Route>
            <Route path="/Starter/Pizza" Component={Pizza}></Route>
            <Route path="/Starter/Veg" Component={Veg}></Route>
            <Route path="/Starter/NonVeg" Component={NonVeg}></Route>
            <Route path='/Order_placed' Component={Order_placed}></Route>
        </Routes>
    )
}

export default Routing;