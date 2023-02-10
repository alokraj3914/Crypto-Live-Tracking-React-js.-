import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./Components/Header";
import Coin from './Components/Coins';
import CoinDetails from './Components/CoinDetails';
import Home from './Components/Home';
import Exchange from './Components/Exchanges';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/coins" element= {<Coin/>}/>
      <Route path="/exchanges" element= {<Exchange/>}/>
      <Route path="/Coin:id" element= {<CoinDetails/>}/>
    </Routes>
   </Router>
  );
}

export default App;
