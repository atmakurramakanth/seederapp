import * as React from 'react';
import { Checkbox, Typography } from '@mui/material';
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface Props{
    checked?:boolean;
}
export default function CheckboxButton(props:Props){
    return (
        <>
        <Typography variant='h5' component="h1">
      Checkboxs
    </Typography>
        <Checkbox checked={props.checked} />
        </>

    )
}