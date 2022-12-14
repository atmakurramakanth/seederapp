import * as React from 'react';
import { Avatar } from '@mui/material';
interface Props{
    content:string,
}
export default function AvatarAtom(props:Props){
    return(
        <Avatar>{props.content}</Avatar>
    )

}