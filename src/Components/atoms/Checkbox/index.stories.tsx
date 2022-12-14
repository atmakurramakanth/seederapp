import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxButton from '.';

export default {
    title: 'Atoms/Checkbox',
    component: 'CheckboxButton',
    argsTypes: {
        onClick: { action: "clicked" },
    }
} as unknown as ComponentMeta<typeof CheckboxButton>
const Template: ComponentStory<typeof CheckboxButton>=(args)=>(
    <CheckboxButton {...args}/>
)
export const Primary = Template.bind({});
Primary.args={
    checked:true,
};
