import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import store from '../redux/storeConfig/store';
import styles from '../styles/Home.module.css';
const Home = () => {
  return (
      <Provider store={store}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Provider>
  );
};

export default Home;
