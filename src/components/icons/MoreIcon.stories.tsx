import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './MoreIcon';

export default {
  title: 'Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const More = Template.bind({});