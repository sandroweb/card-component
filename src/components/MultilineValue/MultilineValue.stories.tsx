import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Currency from '../Currency';
import MultilineValue from './';


export default {
  title: 'MultilineValue',
  component: MultilineValue,
  argTypes: {
    label: {
      defaultValue: 'label',
    }
  },
} as ComponentMeta<typeof MultilineValue>;

const Template: ComponentStory<typeof MultilineValue> = (args) => <MultilineValue {...args} />;

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