import Home from "./Home"
import Product from "./Product"
import Service from "./Service"
import About from "./About"
// import Card from "./Card"
import {Route,Routes} from "react-router-dom"

const Routing=()=>{
    return(
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/product" Component={Product}></Route>
            <Route path="/service" Component={Service}></Route>
            <Route path="/about" Component={About}></Route>
            {/* <Route path="/card" Component={Card}></Route> */}
        </Routes>
    )
}
export default Routing