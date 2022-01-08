import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import store from '../../redux/storeConfig/store';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <div className={styles.jumbotron} style={{height: '70vh'}}>About</div>
      <Footer></Footer>
    </Provider>
  );
};

export default index;
