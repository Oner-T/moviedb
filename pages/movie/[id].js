import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      const res = axios.get(
        `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=f5e2efb57ce2ae08ebd56e75628657b2&language=en-US`,
        {},
        {}
      ).then(res => setMovie(res.data) )
      setMovie(res);
    }
  }, [router.query]);
  useEffect(() => {}, []);
  return <div>{movie.title}</div>;
};

export default MovieDetail;
