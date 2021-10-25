import React from "react";
import Cards from "./Cards";
import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
const View = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const [status, setStatus] = useState();

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
      await axios.post(`http://localhost:3333/database`, user);
      setStatus(true);
    } catch (e) {
      console.log(e);
    }
  }
  if (status) {
    return <View />;
  }

  return (
    <>
      <Grid
        container
        style={{
          borderBottom: "1px double black",
          margin: "10px 13%",
          width: "70%",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          style={{ margin: "10px auto", width: "80%", textAlign: "center" }}
        >
          CRUD using RectJs and MaterialUI
        </Typography>
      </Grid>
      <Box style={{ margin: "40px 100px" }}>
        <Grid container style={{ margin: "10px auto", width: "80%" }}>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            style={{
              margin: "10px auto",
              width: "80%",
              textAlign: "center",
              border: "1px solid grey",
              backgroundColor: "#d2d2d2",
            }}
          >
            ADD An Entry
          </Typography>
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="firstname"
            label="First Name"
            variant="outlined"
            name="first_name"
            required
            fullWidth
            onChange={(e) => onTextFieldChange(e)}
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="lastname"
            label="Last Name"
            variant="outlined"
            required
            fullWidth
            onChange={(e) => onTextFieldChange(e)}
            name="last_name"
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="email"
            label="Email"
            variant="outlined"
            required
            fullWidth
            name="email"
            onChange={(e) => onTextFieldChange(e)}
          />
          <TextField
            style={{ margin: "10px auto", width: "80%" }}
            id="imagelink"
            label="Image Link"
            variant="outlined"
            required
            fullWidth
            name="avatar"
            onChange={(e) => onTextFieldChange(e)}
          />
          <Button
            style={{ margin: "10px 30%", width: "80%", padding: "15px" }}
            variant="outlined"
            onClick={(e) => onFormSubmit(e)}
          >
            ADD
          </Button>
        </Grid>
      </Box>

      <Cards />
    </>
  );
};

export default View;
