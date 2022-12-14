import React from 'react';
import './App.css';
import BasicButtons from './Components/organisms/LoginPageOrganism';
import SimpleDialogDemo from './Components/organisms/AvatarOrganism';
import {ThemeProvider } from '@mui/material/styles';
import Theme from './Themes/index'
import CheckboxButton from './Components/atoms/Checkbox';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BasicButtons/>
      <SimpleDialogDemo/>
      
    </ThemeProvider>
  );
}

export default App;
