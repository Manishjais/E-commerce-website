import React from "react"
import './App.css';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout.js';
import Payment from './Payment.js';
import Login from './Login.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from'@stripe/react-stripe-js';

const stripePromise = loadStripe(
  "pk_test_51MRvxqSHjIDika7FkaT4IU5zMtxnsk2BC7DBLSmg1yOmoKZ45qBe8xKJG5520EQmo0okwCrJUMVs7AUefM623A4Z00oBs7PGKP"
);
function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header/>, <Home/>]}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
          <Route path="/payment" element={[<Header />,<Elements stripe={stripePromise}> <Payment/></Elements>]}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
