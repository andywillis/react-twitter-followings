import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Header from './components/Header';
import Grid from './components/Grid';

import styles from './App.module.css';

import appTitleState from './store/atoms/appTitle';

function App() {

  const [ data, setData ] = useState([]);
  const appTitle = useRecoilValue(appTitleState);

  useEffect(() => {

    const es = new EventSource('/stream');

    es.onmessage = (event) => {
      const { message } = JSON.parse(event.data);
      console.log(message);
    };

  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/followings');
      const data = await response.json();
      data.sort((a, b) => a.name > b.name);
      setData(data);
    }
    getData();
  }, []);

  return (
    <div className={styles.app}>
      <Header title={appTitle} />
      <Grid data={data} />
    </div>
  );
}

export default App;
