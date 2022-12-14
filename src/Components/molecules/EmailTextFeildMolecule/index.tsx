import * as React from 'react';
import TextField from '@mui/material/TextField';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


export default function EmailField(){
    return(
        <TextField color='primary'
  name="email"
  type="email"
  placeholder="Enter your email id "
  label="Email"
  InputProps={{startAdornment: <PersonRoundedIcon />}}

/>

    )
}

