import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarAtom from '.';
export default {
    title: 'Atoms/Avatar',
    component: 'AvatarAtom',
    argsTypes: {
        content: {
            control: "text"
        }
    }
} as unknown as ComponentMeta <typeof AvatarAtom>;
const Template : ComponentStory<typeof AvatarAtom>= (args)=>(
    <AvatarAtom {...args} />
)

export const Primary = Template.bind({});
Primary.args = {
  content:'AR',
};