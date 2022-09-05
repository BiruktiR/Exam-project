import React, { useState} from 'react';
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Grid, Container, Box,Paper , Typography} from '@mui/material';
import data from '../../Components/mockData.json';
import ReadOnlyRow from '../../Components/ReadOnlyRow';
import EditableRow from '../../Components/EditableRow';

function Admin() {

    const [teachers, setTeachers] = React.useState(data);

    const [editTeacherId, setEditTeacherId] = React.useState(null);
    const [editFormData, setEditFormData] = React.useState({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        address: ''
    });

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();
    //     const fieldName = event.target.getAttribute('primary');
    //     const fieldValue = event.target.value.toString();

    //     const newFormData = {...addFormData};
    //     newFormData[fieldName] = fieldValue;

    //     setAddFormData(newFormData);
        
    // }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value.toString();

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleEditClick = (event, teacher) => {
        setEditTeacherId(teacher.id);

        const formValues = {
            fullName: teacher.fullName,
            email: teacher.email,
            phone: teacher.phone,
            gender: teacher.gender,
            address: teacher.address
        }

        setEditFormData(formValues);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedTeacher = {
            id: editTeacherId,
            fullName: editFormData.fullName,
            email: editFormData.email,
            phone: editFormData.phone,
            gender: editFormData.gender,
            address: editFormData.address
        }

        const newTeachers = [... teachers];

        const index = teachers.findIndex((teacher) => teacher.id === editTeacherId);
        
        newTeachers[index] = editedTeacher;

        setTeachers(newTeachers);
        setEditTeacherId(null);


    }

    const handleCancelClick = () => {
        setEditTeacherId(null);
    }

    const handleDeleteClick = (teacherId) => {

        const newTeachers = [... teachers];

        const index = teachers.findIndex((teacher) => teacher.id === teacherId);

        newTeachers.splice(index, 1);

        setTeachers(newTeachers);

    }

    
  return (
      <>
        <form onSubmit={handleEditFormSubmit}>
            <Box component='main' sx={{ flexGrow: 1, py: 8, width: '100%' }}>
            <Container maxWidth="lg">
            <Typography
                sx={{ mb: 3 }}
                variant="h4"
            >
                Employee list
            </Typography>
            <TableContainer component={Paper}   sx={{
                    height: 400    
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name </TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Gender</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {teachers.map((teacher) => (
                        <React.Fragment>
                            { editTeacherId === teacher.id ?  
                                (<EditableRow 
                                    teacher={teacher}
                                    editFormData={editFormData} 
                                    handleEditFormChange={handleEditFormChange}  
                                    handleCancelClick={handleCancelClick}
                                    />) :  
                                (<ReadOnlyRow 
                                    teacher={teacher} 
                                    handleEditClick={handleEditClick} 
                                    handleDeleteClick={handleDeleteClick}
                                    />) 
                            }
                        
                        
                        </React.Fragment>
                        ))} 
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
            </Box>
        </form>
      </>
  )
}

export default Admin