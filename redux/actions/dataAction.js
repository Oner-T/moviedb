import axios from 'axios';

export const dataAction = () => async (dispatch) => {
  try {
    const res = await axios.post(
      'https://api.themoviedb.org/3/movie/popular?api_key=f5e2efb57ce2ae08ebd56e75628657b2&language=en-US&page=1',
      {},
      {}
    );
    dispatch({
      type: 'GET_DATA',
      payload: res.data,
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
