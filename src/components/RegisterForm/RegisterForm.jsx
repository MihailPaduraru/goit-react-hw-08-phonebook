import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  FormBtn,
  FormWrap,
  Title,
} from 'components/LoginForm/LoginForm.styled';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { logIn, register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Title>Registration form</Title>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <FormWrap>
          <TextField required id="outlined" name="name" label="Name" />
          <TextField
            required
            id="outlined-required"
            name="email"
            label="Email"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            required
          />
          <FormBtn type="submit">Register</FormBtn>
        </FormWrap>
      </Box>
    </>
  );
};

export default RegisterForm;
