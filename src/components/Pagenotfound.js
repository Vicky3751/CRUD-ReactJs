import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";

const Pagenotfound = () => {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <Box>
      <Grid container style={{ width: "50%", margin: "10% auto" }}>
        <Grid item style={{ width: "100%", margin: "30% 20%" }}>
          <Typography variant="h3" component="div" gutterBottom>
            Page Not Found !
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pagenotfound;
