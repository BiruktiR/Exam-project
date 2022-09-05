import React from 'react';
import {  TableCell,  TableRow} from '@mui/material';
import {  Button, Box} from '@mui/material';

function ReadOnlyRow({ teacher, handleEditClick, handleDeleteClick}) {
  return (
    <>
    <TableRow>
        <TableCell>{teacher.fullName}</TableCell>
        <TableCell >{teacher.email}</TableCell>
        <TableCell >{teacher.phone}</TableCell>
        <TableCell >{teacher.gender}</TableCell>
        <TableCell >{teacher.address}</TableCell>
        <TableCell >
          <Button 
          color="secondary" 
          variant="contained" 
          onClick={(event) => {handleEditClick(event, teacher)}}
          >
            Edit
          </Button>
          <Button 
          color="error" 
          variant="contained" 
          onClick={() => {handleDeleteClick(teacher.id)}}
          >
            Delete
          </Button>
        </TableCell>
    </TableRow>
    </>
  )
}

export default ReadOnlyRow