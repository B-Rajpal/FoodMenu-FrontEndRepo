import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
function Home() {
  return (
    <>
    <body>
    <div class="home">
    <img src="home.jpg" alt="home" class="dosa"/>
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/Menu" className='nav'>Menu</Link></li>
    <li><Link to="/Customer" className='nav'>Customer</Link></li>
    <li><Link to="/" className='nav'  style={{marginRight:"0px"}}>Contact</Link></li>
    <li><Link to="/login" className='nav'> <Button type='submit'>Login in</Button></Link></li>
    </ul>
    </div>
    <h1>Feeling hungry!</h1>
    <button type="submit" className='order'>Order Now</button>
    <p>Eat Healthy ...! &nbsp; Live Healthy...!</p>
    </div>
    </body>
    </>
  )
}

export default Home