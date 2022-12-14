import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContinueButton from '.';
import Theme from '../../../Themes';
import { ThemeProvider } from '@mui/material';

export default {
  title: 'Atoms/button',
  component: 'ContiueButton',
  argTypes: {
    handleClick: { action: 'clicked' },

    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: 'select' },
    },
    
    
  }
} as unknown as ComponentMeta <typeof ContinueButton>;

const Template: ComponentStory<typeof ContinueButton>= (args)=> (
  <ThemeProvider theme={Theme}>
  <ContinueButton {...args}/>
  </ThemeProvider>

)
export const Primary = Template.bind({});
Primary.args = {
  text:'primary',
  backgroundcolor:"red",
  variant:"contained",
  // handleClick:()=>(console.log("hello")),

};
export const Secondary = Template.bind({});
Secondary.args={
  text:'secondary',
  backgroundcolor:"blue",
  variant:"contained",
};



