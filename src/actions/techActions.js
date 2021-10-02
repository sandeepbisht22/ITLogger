import {
  GET_TECHS,
  ADD_TECH,
  DELTE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

//get techs from server

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};