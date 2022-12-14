import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Visibility from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';
import ContinueButton from '../../atoms/Button';
import EmailField from '../../molecules/EmailTextFeildMolecule'
import TextField from '@mui/material/TextField';
import Text from '../../atoms/Typography';
import CheckboxButton from '../../atoms/Checkbox';


export default function BasicButtons() {
  return (
      <><Box
      sx={{
        width: 300,
        mx: 'auto',
        my: 4,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
        border: '2px solid black'
      }}
    >
      <div>
        <Text />
        <Typography variant='subtitle2'>Enter your mail id and password to login</Typography>
      </div>
      <EmailField />
      <TextField
        name="password"
        type="password"
        placeholder="password"
        label="Password"
        InputProps={{ endAdornment: <Visibility /> }} />
      <Typography variant='subtitle1' color='red'><center>Forgot Password?</center></Typography>
      <ContinueButton />
      <Typography

        fontSize="sm"
        sx={{ alignSelf: 'center' }}
      >
        Don't have an account?
        <Link href="/sign-up">Sign Up</Link>
      </Typography>
    </Box><CheckboxButton /></>
    
  );
}
