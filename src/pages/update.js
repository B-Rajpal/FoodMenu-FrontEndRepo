import React from 'react';
import "./home.css";
import "./add.css";
import "./Menu.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, Grid, TextField } from '@mui/material';
import axios from 'axios';


export const Update = () => {
  const [id,setId]=useState(0);
  const [name,setName]=useState("");
  const [price,setPrice]=useState(0);
  const SubmitHandler =(e)=>{
    e.preventDefault();
    const article={
      id:id,
      name: name,
      price: price,
    }
    axios.put('http://127.0.0.1:8080/updateDetails', article)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
  return (
    <>
    <div class="home" style={{width:"45vw",margin:"20vh 25vw",height:"56vh"}}>
    <h2>Update Details</h2>
    <form onSubmit={SubmitHandler}>
    <Grid style={{margin:"10px 100px 10px 100px"}}>
    <TextField label="Id" name='id'  className="textfieldedit" onChange={ e => setId(e.target.value)} />
    <TextField label="Name" name='fname' className="textfield" onChange={ e => setName(e.target.value)}/>
    <TextField label="Price" name='lname' className="textfield" onChange={ e => setPrice(e.target.value)}/>
    <Checkbox/><label style={{opacity:0.5}}>Make Changes to DB</label><br/>
    <Button type='submit' style={{marginLeft:"200px"}}>Update</Button>
    </Grid>
    </form>
    <Link to="/Menu"><Button type='submit' className='back'>Back</Button></Link>
    </div>
    </>
    )
  }
  export default Update;