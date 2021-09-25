import Currency from 'components/Currency';
import Percent from 'components/Percent';
import Preloader from 'components/Preloader';
import IResumeItem from 'interfaces/IResumeItem';
import React, { useCallback, useEffect, useState } from 'react';
import { wealthSummaryServiceLoadAll } from 'services/WealthSummaryService';
import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';
import MultilineValue from './components/MultilineValue';
import SingleLineValue from './components/SingleLineValue';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<IResumeItem[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);

  const loadCards = useCallback(() => {
    wealthSummaryServiceLoadAll(
      setLoading,
      response => setResult(response.wealthSummary),
      errors => console.log(errors)
    )
  }, [setResult, setLoading])

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      loadCards();
    }
  }, [initialized, setInitialized, loadCards])

  return (
    <div className="App">
      <Preloader label="Carregando ..." hidden={!loading} />
      {
        !loading && result.length > 0 && (
          <Grid container>
            {
              result.map(
                (it, key) => (
                  <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                    <Card
                      title="Seu resumo"
                      optionsCallback={() => alert(`id ${it.id}`)}
                      action={
                        it.hasHistory ? {
                          label: 'Ver mais',
                          callback: () => alert(`id ${it.id}`),
                        } : undefined
                      }
                    >
                      <MultilineValue label="Valor investido">
                        <Currency currency={it.total} />
                      </MultilineValue>
                      <SingleLineValue label="Rentabilidade/mês">
                        <Percent percent={it.profitability} />
                      </SingleLineValue>
                      <SingleLineValue label="CDI">
                        <Percent percent={it.cdi} />
                      </SingleLineValue>
                      <SingleLineValue label="Ganho/mês">
                        <Currency currency={it.gain} />
                      </SingleLineValue>
                    </Card>
                  </Grid>
                )
              )
            }
          </Grid>
        )
      }
    </div>
  );
}

export default App;
