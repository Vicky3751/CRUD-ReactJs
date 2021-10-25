import React from 'react'
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {

  const {id} = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });
  useEffect(() => {
    async function student (){
      try{
        const user = await axios.get(`http://localhost:3333/database/${id}`)
        //console.log(user.data.data);
        setUser(user.data)
      }catch(e){
        console.log(e);
      }
    }
     student();
  }, [id]);


  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    //console.log(user);
  }


  async function onFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await axios.put(`http://localhost:3333/database/${id}`, user);
      history.push("/")
    } catch (e) {
      console.log(e);
    }
  }



  const history = useHistory();
  function handleClick() {
    history.push("/");
  }



    return (
        <div>
            <Box style={{margin:"100px"}}>
      <Grid container style={{ margin: "10px auto", width: "80%" }}>
      <Button style={{ margin: "10px 30%", width: "80%" }} onClick={handleClick} variant="contained">Back To Home</Button>
        <Typography variant="h3" component="div" gutterBottom style={{ margin: "10px auto", width: "80%", textAlign: "center", border: "1px solid grey",backgroundColor: "#d2d2d2"}}>
          Update the Entry
        </Typography>
        <TextField 
            style={{ margin: "10px auto", width: "80%" }}
            id="id"
            label=""
            variant="outlined"
            name="id"
            required
            fullWidth
            value={user.id}
            disabled
          />
        <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="firstname"
            label="First Name"
            variant="outlined"
            name="first_name"
            required
            fullWidth
            value={user.first_name}
            onChange ={e => onTextFieldChange(e)}
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="lastname"
            label="Last Name"
            variant="outlined"
            required
            fullWidth
            name="last_name"
            value={user.last_name}
            onChange ={e => onTextFieldChange(e)}
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="email"
            label="Email"
            variant="outlined"
            required
            fullWidth
            name="email"
            value={user.email}
            onChange ={e => onTextFieldChange(e)}
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="imagelink"
            label="Image Link"
            variant="outlined"
            required
            fullWidth
            name="avatar"
            value={user.avatar}
            onChange ={e => onTextFieldChange(e)}
          />
        <Button style={{ margin: "10px 30%", width: "80%" }} variant="outlined" onClick={ e => onFormSubmit(e)}>Update</Button>
      </Grid>
    </Box>
        </div>
    )
}

export default Update
