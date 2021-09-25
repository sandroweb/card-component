import React, { CSSProperties, Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SingleLineValue from './';
import Currency from '../Currency';

export default {
  title: 'SingleLineValue',
  component: SingleLineValue,
  argTypes: {
    label: {
      defaultValue: 'label',
    }
  },
} as ComponentMeta<typeof SingleLineValue>;

const Template: ComponentStory<typeof SingleLineValue> = (args) => <SingleLineValue {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Short label',
  children: (
    <Currency currency={2342342.34} />
  )
};

export const BigLabel = Template.bind({});
BigLabel.args = {
  label: 'Big label big label big label big label big label',
  children: (
    <Currency currency={24.234423} />
  )
};