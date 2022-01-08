import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataAction } from '../redux/actions/dataAction';
import Card from './Card';
import styles from '../styles/Home.module.css';

const Body = () => {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataAction());
  }, []);

  useEffect(() => {
    setData(state.data.results);
  }, [state.data]);

  const onClick = (id) => {
    window.location.href = `/movie/${id}`;
  };

  return (
    <>
      <div className={styles.jumbotron}></div>
      <div className={styles.main}>
        {data?.map((res) => (
          <Card onClick={() => onClick(res.id)} key={res.id}>
            <img
              style={{ width: 50 }}
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            />
            {res.original_title}
          </Card>
        ))}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const state = await store.getState();

  const paths = await state.data?.results?.map((item) => {
    return { params: { id: item.id } };
  });

  return { paths: paths, fallback: false };
}

export default Body;
