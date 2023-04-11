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

const AddGameDialog = props => {
    const [tag, setTag] = React.useState('');

  const handleChange = (event) => {
    setTag(event.target.value);
  };
    console.log(props)

  if(props.addNewGame == true){
    return (
    <div>
      <Dialog open={props.addNewGame} onClose={props.handleClose}>
        <DialogTitle>Add New Game</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Introduction"
            type="email"
            fullWidth
            variant="standard"
          />
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={tag}
            onChange={handleChange}
            fullWidth
            label="Tag"
         >
          <MenuItem value={10}>Action</MenuItem>
          <MenuItem value={20}>Fantasy</MenuItem>
          <MenuItem value={30}>Multiplayer</MenuItem>
        </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  }
  else{
    return null
  }
  
}

export default AddGameDialog;