import React from 'react';
import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card title="Card 1">
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card action={{label: 'Abrir', callback: () => {}}}>
            Opa
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card action={{label: 'Disabled', callback: () => {}, disabled: true}}>
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
