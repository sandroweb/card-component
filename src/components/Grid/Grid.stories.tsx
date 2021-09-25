import React, { CSSProperties, Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from './';

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const style: CSSProperties = {
  backgroundColor: 'rgba(255, 0, 0, 0.2)',
  color: 'rgb(255, 100, 100)',
  width: '100%',
  textAlign: 'center',
}

export const Default = Template.bind({});
Default.args = {
  container: true,
  children: (
    <Fragment>
      <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
        <div style={{ ...style }}>
          Item<br />
          xs=12<br />
          sm=6<br />
          md=4<br />
          lg=3<br />
          xl=2
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
        <div style={{ ...style }}>
          Item<br />
          xs=12<br />
          sm=6<br />
          md=4<br />
          lg=3<br />
          xl=2
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
        <div style={{ ...style }}>
          Item<br />
          xs=12<br />
          sm=6<br />
          md=4<br />
          lg=3<br />
          xl=2
        </div>
      </Grid>
    </Fragment>
  )
};