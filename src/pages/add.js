import React from 'react';
import "./home.css";
import "./add.css";
import "./Menu.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';


export const Add = () => {
  const [id,setId]=useState(0);
  const [name,setName]=useState("");
  const [price,setPrice]=useState(0);
  const SubmitHandler =(e)=>{
    e.preventDefault();
    const data = {
      id:id,
      name: name,
      price: price,   
    };
    axios.post('http://127.0.0.1:8080/addDetails', data)
}
  return (
    <>
    <div class="home" style={{width:"45vw",margin:"20vh 25vw",height:"50vh"}}>
    <h2>AddDetails</h2>
    <form onSubmit={SubmitHandler}>
    <Grid style={{margin:"10px 100px 10px 100px"}}>
    <TextField label="Id" name='id' type="number" className="textfieldedit" onChange={ e => setId(e.target.value)} />
    <TextField label="Name" name='fname' className="textfield" onChange={ e => setName(e.target.value)}/>
    <TextField label="Price" name='lname' type="number" className="textfield" onChange={ e => setPrice(e.target.value)}/>
    <Button type='submit' style={{marginLeft:"200px"}}>Add</Button>
    </Grid>
    </form>
    <Link to="/Menu"><Button type='submit' className='back'>Back</Button></Link>
    </div>
    </>
    )
  }
  export default Add;