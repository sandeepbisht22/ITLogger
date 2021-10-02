import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
  SEARCH_LOGS,
} from "./types";

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch("./logs");
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Get logs from server
export const addLogs = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./logs", {
      method: "post",
      body: JSON.stringify(log),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add new logs
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete LOgs

export const deleteLogs = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`./logs/${id}`, {
      method: "delete",
    });
    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Update LOg

export const udpateLogs = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`./logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Search lOgs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`./logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set Current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear Current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
