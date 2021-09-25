import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MultilineValue from './../MultilineValue';
import SingleLineValue from './../SingleLineValue';
import Currency from './../Currency';

import Card from './';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      defaultValue: 'Card Title',
    }
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <Fragment>
      <MultilineValue label="Valor investido">
        <Currency currency={3424234} />
      </MultilineValue>
      <SingleLineValue label="Rentabilidade/mês">
        2,767%
      </SingleLineValue>
      <SingleLineValue label="CDI">
        3,45%
      </SingleLineValue>
      <SingleLineValue label="Ganho/mês">
        <Currency currency={1833.23} />
      </SingleLineValue>
    </Fragment>
  ),
  optionsCallback: () => window.alert('Options'),
  action: {
    label: 'Ver mais',
    callback: () => alert('Ver mais '),
  }
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
  title: '',
  children: (
    <MultilineValue label="Valor investido">
      <Currency currency={3424234} />
    </MultilineValue>
  ),
};