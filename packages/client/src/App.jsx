import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Footer from './components/Footer';
import Header from './components/Header';
import Grid from './components/Grid';

import styles from './App.module.css';

import appTitleState from './store/atoms/appTitle';
import footerMessageState from './store/atoms/footerMessage';
import randomSourceState from './store/selectors/randomSource';

function App() {

  const [ data, setData ] = useState([]);
  const appTitle = useRecoilValue(appTitleState);
  const footerMessage = useRecoilValue(footerMessageState);
  const randomSource = useRecoilValue(randomSourceState);

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
      <Grid data={data} randomSource={randomSource} />
      <Footer message={footerMessage} />
    </div>
  );
}

export default App;
