import HeaderComponent from './Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FooterComponent from './Footer';
import Routing from './Routing'
import BackToTopButton from './BackToTopButton';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop/>
        <HeaderComponent/>
        <Routing/>
        <FooterComponent/>
        <BackToTopButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
