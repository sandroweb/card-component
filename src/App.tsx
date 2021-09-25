import Currency from 'components/Currency';
import React from 'react';
import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';
import MultilineValue from './components/MultilineValue';
import SingleLineValue from './components/SingleLineValue';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card title="Card 1" optionsCallback={() => {}}>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card action={{label: 'Abrir', callback: () => {}}}>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card title="Seu resumo" optionsCallback={() => {}} action={{label: 'Disabled', callback: () => {}, disabled: true}}>
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
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card title="Seu resumo" optionsCallback={() => {}} action={{label: 'Ver mais', callback: () => {}}}>
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
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            Opa
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
