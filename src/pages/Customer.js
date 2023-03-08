import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import "./Menu.css";
import ShowCustomer from './showcustomer';
function Customer() {
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
    <h2>Customer</h2>
    <div class="change">
        <button class="edit" onClick={()=>{document.getElementById("option").style.display="block"}}>Edit Customer</button>
        <div id="option">
        <ul>
           <li><Link to="/UpdateCustomer" className='options'>Update </Link></li>
           <li><Link to="/deleteCustomer" className='options'>Delete </Link></li>
        </ul>
        </div>
    </div>
      <div style={{margin:"100px 0px 0px 100px"}}>
      <ShowCustomer/>
      </div>
      </div>
      </body>
        </>
  );
}

export default Customer;