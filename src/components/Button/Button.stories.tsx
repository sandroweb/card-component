import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => alert('Click test'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
  onClick: () => alert('Click test'),
};