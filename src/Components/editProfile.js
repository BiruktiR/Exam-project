import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Container
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    address: 'Lore',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    birthDate: 'Alabama',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [gender, setGender] = React.useState('female');

  const handleRadioChange = (event) => {
    setGender((event.target).value);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Box component='main' sx={{ flexGrow: 1, py: 8, width: '100%' }}>
      <Container maxWidth="lg">
      <Typography
        sx={{ mb: 3 }}
        variant="h4"
      >
        Edit Profile
      </Typography>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Birth Date"
                name="birthDate"
                onChange={handleChange}
                required
                value={values.birthDate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FormControl> 
                <RadioGroup
                  row
                  value={gender}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
      </Container>
      </Box>
    </form>
  );
};
