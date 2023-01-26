import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const[data, setData] = useState([]);
    console.log(input);
    const handleInput = (e) => {
        const {value, name} = e.target;
       // console.log(name, value);

        setInput (() => {
            return{
                ...input,
                [name] : value
            }
        })
    }
    

    const SignIn = e => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const {email, password} = input;

       if(email === ""){
            alert("email field is required");
       }
       else if(!email.includes("@")){
        alert("please enter valid email address");
   }
       else if(password === ""){
        alert("password field is required");
   }
   else{
        if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k)=>{
            return el.email === email && el.password === password
        });

        if(userlogin.length === 0){
        alert("invalid details");
        }else{
            alert("user login succesfully");
            navigate('/')
        }
   }
}
        
    }

    const register = e => {
        e.preventDefault();
       // localStorage.setItem("user", JSON.stringify(input));
       const {email, password} = input;

       if(email === ""){
            alert("email field is required");
       }
       else if(!email.includes("@")){
        alert("please enter valid email address");
   }
       else if(password === ""){
        alert("password field is required");
   }
   else{
    localStorage.setItem("user",JSON.stringify([data,input]));
   }

    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' name='email' onChange= {handleInput}  
                        />

                    <h5>Password</h5>
                    <input type='password' name='password' onChange= {handleInput}/>

                    <button type='submit' onClick={SignIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login