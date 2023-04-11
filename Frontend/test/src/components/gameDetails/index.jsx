import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Review from "../Review/Review";
import Rules from "../Rule/rule";
import styles from "./style.css"

const GameDetails = props => {

  if(props.openGame == true){
    return (
    <div>
      <Dialog 
        PaperProps={{
          style: {
            backgroundColor: "#202533"
          },
        }}
        maxWidth="lg"
        open={props.openGame}
        onClose={props.handleClose}>
        <DialogContent>
          <Review/>
          <Rules/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  }
  else{
    return null;
  }
  
}

export default GameDetails;