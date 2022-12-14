
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import AvatarAtom from '../../atoms/Avatar';

export default function DropDown(){
    return(
        <Stack direction='row'><AvatarAtom content='AR'/><ArrowDropDownIcon /></Stack>
    )
}

