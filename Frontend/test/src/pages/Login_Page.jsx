import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Button,
  Typography
} from '@mui/material';
import SearchBar from "../components/searchBar/searchBar";
import BasicButton from "../components/basicButton/basicButton";


const LoginPage = () => {
  const [signUp, setSignUp] = React.useState(false);
  const handleLoginButton = () => {
    setSignUp(!signUp);
  }

  if(!signUp){
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px"}}>
        <SearchBar placeHolder={"Name"} />
        <SearchBar placeHolder={"Password"} />
        <BasicButton svg="svg/login.svg" handleButtonClick={handleLoginButton}/>
      </div>
    );
  }
  else{
    return (
      <div style={{ padding: 30 }}>
        <Typography variant="h3" component="h3" align="center"> Sign Up </Typography>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField label="Username" sx={{input: {color: 'white'}}}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" sx={{input: {color: 'white'}}}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" type={'email'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="First Name"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name"></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button> Create Account </Button>
            </Grid>
          </Grid>
      </div>
    );
  }
};

export default LoginPage;



