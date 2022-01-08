import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import store from '../../redux/storeConfig/store';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const pStyle = {
  fontSize: 14,
};
const spanStyle = {
  fontWeight: 700,
};
const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      const res = axios
        .get(
          `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=f5e2efb57ce2ae08ebd56e75628657b2&language=en-US`,
          {},
          {}
        )
        .then((res) => setMovie(res.data));
      setMovie(res);
    }
  }, [router.query]);
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <Header></Header>
      <div className={styles.jumbotron} style={{ height: '100%', padding: 20 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{ width: 250 }}
        />
        <div style={{ margin: 20 }}>
          <p style={(pStyle, { fontSize: 24 })}>
            <span style={spanStyle}>Title:</span> {movie.original_title}
          </p>
          <p style={pStyle}>
            <span style={spanStyle}>Release date:</span> {movie.release_date}
          </p>
          <p style={pStyle}>
            <span style={spanStyle}>Overview:</span> {movie.overview}
          </p>
          <p style={pStyle}>
            <span style={spanStyle}>Rating:</span> {movie.vote_average}
          </p>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          style={{ width: 250 }}
        />
      </div>
      <Footer></Footer>
    </Provider>
  );
};

export default MovieDetail;
