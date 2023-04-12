import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import React, { useState, useEffect } from 'react';

function AddGameDialog(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [officialRule, setOfficialRule] = useState('');
  const [photo, setPhoto] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/tag/all')
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  const handleAddGame = () => {
    const game = {
      name: name,
      description: description,
      publisher: publisher,
      release_date: releaseDate,
      official_rule: officialRule,
      photo: photo,
      review: [],
      rule: [],
      seller: [],
      tag: [tag],
    };
    fetch('http://localhost:8000/game/crud', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        props.handleClose();
      });
  };

  const handleChange = (event) => {
    setTag(event.target.value);
  };

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
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="publisher"
            label="Publisher"
            type="text"
            fullWidth
            variant="standard"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="releaseDate"
            label="Release Date"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
              style: { marginTop: '0px' } // adjust label position
            }}
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="officialRule"
            label="Official Rule"
            type="text"
            fullWidth
            variant="standard"
            value={officialRule}
            onChange={(e) => setOfficialRule(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="photo"
            label="Photo"
            type="text"
            fullWidth
            variant="standard"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={tag}
            onChange={handleChange}
            fullWidth
            label="Tag"
          >
            {tags.map((tag) => (
              <MenuItem key={tag._id} value={tag._id}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>

           </DialogContent>
           <DialogActions>
             <Button onClick={props.handleClose}>Cancel</Button>
             <Button onClick={handleAddGame}>Add</Button>
           </DialogActions>
         </Dialog>
       </div>
     );
   }
   
   export default AddGameDialog;
