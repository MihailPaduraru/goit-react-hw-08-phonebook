import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';
import { FormBtn, FormWrap, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Title>Please input your login email and password</Title>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <FormWrap>
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
          <FormBtn type="submit">Log In</FormBtn>
        </FormWrap>
      </Box>
    </>
  );
};
{
}

export default LoginForm;
