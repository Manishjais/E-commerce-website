import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""/>

            <div className="home__row">
               <Product id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={199}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
               
               <Product id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={37000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />

            <Product id ="3"
            title="WD 2TB Elements Portable External Hard Drive - USB 3.0 "
            price={189}
            rating={3}
            image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" />
            </div>
            <div className="home__row">
               <Product id="4"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={134999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

               <Product id="5"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3499}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
               
               <Product id="6"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={78670}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            </div>
            <div className="home__row">
            <Product id="7"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={274000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />

            <Product id="8"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
            price={29999}
            rating={4}
            image="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"/>

            <Product id="9"
            title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            price={13483}
            rating={5}
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
            </div>

            <div className="home__row">
            <Product id="10"
            title="Mens Casual Premium Slim Fit T-Shirts"
            price={400}
            rating={4}
            image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />

            <Product id="11"
            title="Mens Cotton Jacket"
            price={799}
            rating={5}
            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"/>

            <Product id="12"
            title="Mens Casual Slim Fit"
            price={1049}
            rating={3}
            image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"/>
            </div>

            <div className="home__row">
            <Product id="13"
            title="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
            price={1500}
            rating={4}
            image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />

            <Product id="14"
            title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
            price={2199}
            rating={5}
            image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"/>

            <Product id="15"
            title="Opna Women's Short Sleeve Moisture"
            price={399}
            rating={3}
            image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"/>
            </div>

            <div className="home__row">
               <Product id="16"
            title="Solid Gold Petite Micropave"
            price={1999}
            rating={4}
            image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" />

               <Product id="17"
            title="White Gold Plated Princess"
            price={1599}
            rating={5}
            image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"/>
               
               <Product id="18"
            title="Pierced Owl Rose Gold Plated Stainless Steel Double"
            price={2100}
            rating={5}
            image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home