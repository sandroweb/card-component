import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Currency from './';

export default {
  title: 'Currency',
  component: Currency,
  argTypes: {
    currency: {
      defaultValue: 3242342,
    }
  },
} as ComponentMeta<typeof Currency>;

const Template: ComponentStory<typeof Currency> = (args) => <Currency {...args} />;

export const Default = Template.bind({});
Default.args = {
  currency: 10.5
};