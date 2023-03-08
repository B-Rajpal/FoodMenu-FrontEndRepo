import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import "./Menu.css";
import Showdata from './showdetails';
function Menu() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/Menu" className='nav'>Menu</Link></li>
    <li><Link to="/Customer" className='nav'>Customer</Link></li>
    <li><Link to="/" className='nav'>Contact</Link></li>
    </ul>
    </div>
    <h2>Menu</h2>
    <div class="change">
        <button class="edit" onClick={()=>{document.getElementById("option").style.display="block"}}>Edit Menu</button>
        <div id="option">
        <ul>
           <li><Link to="/Add" className='options'>Add Menu</Link></li>
           <li><Link to="/Update" className='options'>Update Menu</Link></li>
           <li><Link to="/delete" className='options'>Delete Menu</Link></li>
        </ul>
        </div>
    </div>
    {/*<div class="image_gallery">
        <img src="idli.jfif" alt="idli"/>
        <img src="puri.jfif" alt="puri"/>
        <img src="pongal.jfif" alt="idli"/>
        <img src="dosa.jpg" alt="idli"/>
        <img src="idli.jfif" alt="idli"/>
        <img src="idli.jfif" alt="idli"/>
      </div>*/}
      <div style={{margin:"100px 0px 0px 100px"}}>
      <Showdata/>
      </div>
      </div>
      </body>
        </>
  );
}

export default Menu