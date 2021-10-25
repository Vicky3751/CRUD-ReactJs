import React from "react";

//Importing useState and useEffect from react
import {useState, useEffect} from "react"


//Using Material UI 5
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Grid } from "@material-ui/core";
import {Link} from "react-router-dom"



// importing axios to fetch the data
import axios from "axios";


const Cards = () => {
  //declaring users as a usestate hook
  const [users, setUsers] = useState([]);
  
  //async await used 
  async function students (){
    try{
      //fetch can be used , Here axios is used to fetch the data from api
      const users = await axios.get("http://localhost:3333/database")
      //console.log(users.data);
      setUsers(users.data)
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
     students();
  }, []);

  const handleDelete = async id =>{
    //use of axios on particular id
    await axios.delete(`http://localhost:3333/database/${id}`)
    //filters and removes the particular data and return all other objects as it is in api.
    var newUser = users.filter((item)=>{
      return item.id !== id;
    })
    setUsers(newUser)
  }


  return (
    //used material UI to design the page 
    <Grid container style={{ margin: "10px auto", width: "80%" }}>
      {users.map((user,i) => {
        return (
          <Card sx={{ maxWidth: 300 }} style={{ margin: "20px 10px" }} key={i+1}>
            <CardActionArea>
              <CardMedia
                style={{ height: 300 }}
                component="img"
                height="140"
                image={user.avatar}
                alt="no image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.first_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box>
              <Grid container >
                <Button component={Link} to={`/viewone/${user.id}`} style={{margin: "5px auto 10px",}} variant="contained">View</Button>
                <Button component={Link} to={`/update/${user.id}`} style={{margin: "5px auto 10px",}} variant="contained">Update</Button>
                <Button onClick={ ()=> handleDelete(user.id)} style={{margin: "5px auto 10px",}} variant="contained">Delete</Button>
              </Grid>
            </Box>
          </Card>
        );
      })}
      </Grid>
   
  );
};

export default Cards;
