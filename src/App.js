
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import Cheakout from "./Components/Cheakout";
import Cart from "./Components/Cart";


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
    <Route path="/Cart"><Header/><Cart/></Route>
    <Route path="/" exact component={ProductListing}/>
    <Route path="/product/:productId" exact component={ProductDetails}/>
    <Route>404 Not Found!</Route>
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;


//import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Header from './Components/Header';
// import Home from './Components/Store';
// import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
// import Checkout from './Components/Checkout';
// import { ProductContextProvider } from './Components/ProductContextProvider';
// import ProductsList from './Components/ProductsList';



// <Router>
//     <div className="App">
//     <Switch>
//     <ProductContext.Provider >
//     <Route path="/checkout"> <Header/><Checkout/></Route>
//     <Route path="/"><Header/><Home/></Route>
//     </ProductContext.Provider>
     
//       </Switch>
//     </div>
//     </Router>