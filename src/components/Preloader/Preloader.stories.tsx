import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Preloader from './';

export default {
  title: 'Preloader',
  component: Preloader,
  argTypes: {
    label: {
      defaultValue: 'Carregando ...',
    },
    hidden: {
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => <Preloader {...args} />;

export const Default = Template.bind({});