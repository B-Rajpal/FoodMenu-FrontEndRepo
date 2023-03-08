import React, { useState } from 'react';
import "./home.css";
import "./add.css";
import "./Menu.css";

import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const UpdateCustomer = () => {
  const [id,setId]=useState(0);
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [city,setCity]=useState("");
  const [phone,setPhone]=useState(0);
  const [password,setPassword]=useState("");
  const SubmitHandler =(e)=>{
    e.preventDefault();
    console.log(id);
    const data = {
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        phone:phone,
        password:password
    };
    axios.put('http://127.0.0.1:8080/updateCustomer', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}
  return (
    <>
    <div class="home" style={{width:"45vw",marginLeft:"25vw"}}>
    <h2>Update</h2>
    <form onSubmit={SubmitHandler}>
    <Grid style={{margin:"10px 100px 10px 100px"}}>
    <TextField label="Id" name='id'  className="textfield" onChange={ e => setId(e.target.value)} />
    <TextField label="Fname" name='fname' className="textfield" onChange={ e => setFname(e.target.value)}/>
    <TextField label="Lname" name='lname' className="textfield" onChange={ e => setLname(e.target.value)}/>
    <TextField label="City" name='city' className="textfield" onChange={ e => setCity(e.target.value)}/>
    <TextField label="Phone" name='Phone' className="textfield" onChange={ e => setPhone(e.target.value)} />
    <TextField label="Password" name='Password' className="textfield" onChange={ e => setPassword(e.target.value)}/><br/>
    <Button type='submit' style={{marginLeft:"200px"}}>submit</Button>
    </Grid>
    </form>
    <Link to="/Customer"><Button type='submit' className='back'>Back</Button></Link>
    </div>
    </>
    )
  }
  export default UpdateCustomer;