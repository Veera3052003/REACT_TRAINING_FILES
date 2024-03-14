import "./App.css";
import "./Header.css";
import HeaderComponent from "./Header.js";
import Routing from "./Routing.js";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card.js";
import ClassComponent from "./ClassComponent.js"

function App(){
  return(
    <BrowserRouter>
      <div className="App_full_background">
        <div className="App">
          <ClassComponent/>
          <HeaderComponent/>
          <Routing/>
          <Card/>
        </div>
      </div>
      </BrowserRouter>
  )
}

export default App;
