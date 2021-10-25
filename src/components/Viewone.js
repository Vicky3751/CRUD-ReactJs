import React from "react";
import { useState, useEffect} from "react"
import { Box, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const Viewone = () => {
  const {id} = useParams();
  //console.log(id);

  const [user, setUser]= useState([]);

  

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



  const history = useHistory();
  function handleClick(){
    history.push("/")
  }



  return (
    <Box>
      <Grid item style={{ margin: "3% auto", width: "80%", display: "flex" }}>
        <Card  style={{ margin: "20px 10px" ,width:"50%"}}>
          <CardActionArea>
            <CardMedia
              style={{ height: 400 }}
              component="img"
              height="140"
              image={user.avatar}
              alt="no image"
            />
            <CardContent style={{  marginTop: "20px" }}>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                {user.first_name} {user.last_name}
              </Typography>
              <hr/>
              <Grid style={{ border: "1px solid #000000"}}>
              <Typography style={{ marginLeft: "41%"}} variant="h6" color="text.secondary">
                ID : {user.id}
              </Typography>
              <Typography style={{ marginLeft: "28%"}} variant="h6" color="text.secondary">
                First Name : {user.first_name}
              </Typography>
              
              <Typography style={{ marginLeft: "28%"}} variant="h6" color="text.secondary">
                Last Name : {user.last_name}
              </Typography>
              
              <Typography style={{ marginLeft: "35%"}} variant="h6" color="text.secondary">
                Email : {user.email}
              </Typography>
              </Grid>
              
            </CardContent>
          </CardActionArea>
        </Card>
        <Grid style={{width: '45%'}}>
          <Grid item style={{margin:"50% ", width:"40%"}}>
            <Button variant="contained" onClick={handleClick}>Back to Home</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Viewone;
