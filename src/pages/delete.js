import React from 'react';
import "./home.css";
import "./add.css";
import "./Menu.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, Grid, TextField } from '@mui/material';
import axios from 'axios';


export const Delete = () => {
  const [id,setId]=useState(0);
  const SubmitHandler =(e)=>{
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}
  return (
    <>
    <div class="home" style={{width:"45vw",margin:"20vh 25vw",height:"40vh"}}>
    <h2>Delete By Id</h2>
    <form onSubmit={SubmitHandler}>
    <Grid style={{margin:"10px 100px 10px 100px"}}>
    <TextField label="Id" name='id'  className="textfieldedit" onChange={ e => setId(e.target.value)} />
    <Checkbox/><label style={{opacity:0.5}}>Make Changes to DB</label><br/>
    <Button type='submit' style={{marginLeft:"200px"}}>Delete</Button>
    </Grid>
    </form>
    <Link to="/Menu"><Button type='submit' className='back'>Back</Button></Link>
    </div>
    </>
    )
  }
  export default Delete;