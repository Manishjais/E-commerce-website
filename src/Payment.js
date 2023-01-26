import React from 'react';
import './Payment.css';
import{ useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import { Link } from "react-router-dom";
import{CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {

    const [{basket, user} ] = useStateValue();
  
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout {
                    <Link to="/checkout">{basket?.length} items</Link>
                    }
            </h1>
            {/*Payment section - delivery address*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery address</h3>
                </div>
                <div className='payment__address'>
                    <p>Mission Hospital Road</p>
                    <p>Bilaspur (C.G.)</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(product => (
                        <CheckoutProduct 
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>

                <form>
                    <CardElement />
                    <button>Buy Now</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment