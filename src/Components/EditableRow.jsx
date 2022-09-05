import React from 'react';
import {  TableCell,  TableRow} from '@mui/material';
import { TextField, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function EditableRow({ teacher, editFormData, handleEditFormChange, handleCancelClick}) {
  return (
    <>
        <TableRow>
            <TableCell>
                <TextField 
                name='fullName' 
                id="outlined-basic" 
                label="Full Name" 
                variant="outlined"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                 />
            </TableCell>
            <TableCell>
                <TextField 
                name='email' 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                value={editFormData.email}
                onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <TextField 
                name='phone' 
                id="outlined-basic" 
                label="Phone" 
                variant="outlined" 
                value={editFormData.phone}
                onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <TextField 
                name='gender' 
                id="outlined-basic" 
                label="Gender" 
                variant="outlined"
                value={editFormData.gender}
                onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell>
                <TextField 
                name='address' 
                id="outlined-basic" 
                label="Address" 
                variant="outlined"
                value={editFormData.address}
                onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell >
          <Button 
          color="success" 
          variant="contained" 
          type='submit'
          >
            Save
          </Button>
          <Button 
          color="error" 
          variant="contained" 
          type='submit'
          onClick={handleCancelClick}
          >
            Cancel
          </Button>
            </TableCell>
        </TableRow>
    </>
  )
}

export default EditableRow