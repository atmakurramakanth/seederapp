import * as React from 'react';
import Button from '@mui/material/Button';
interface Props{
    text?:'primary'|'secondary',
    variant?:"contained"|"outlined"|"text",
    handleClick?:()=>void
    backgroundcolor?: string
}
export default function ContinueButton(props:Props){
    return(
        <Button  variant={props.variant} onClick={props.handleClick} sx={{backgroundColor:props.backgroundcolor}}>
  {props.text}
</Button>
    )
}
