import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Percent from './';

export default {
  title: 'Percent',
  component: Percent,
  argTypes: {
    percent: {
      defaultValue: 23.35,
    }
  },
} as ComponentMeta<typeof Percent>;

const Template: ComponentStory<typeof Percent> = (args) => <Percent {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 10324.535342
};