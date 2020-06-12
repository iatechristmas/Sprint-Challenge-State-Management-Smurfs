import axios from "axios";
import { useSelector } from "react-redux";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("getData -> res", res);
        dispatch({ type: UPDATE_DATA, payload: res.data });
      })
      .catch((err) => {
        console.error("error fetching smurfs from api. err: ", err);
        dispatch({
          type: SET_ERROR,
          payload: "error fetching smurfs from api",
        });
      });
  }, 500);
};

export const addSmurf = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log("addSmurf -> res", res);
      dispatch({ type: ADD_NEW_SMURF, payload: newSmurf });
    })
    .catch((err) => {
      console.error("error adding smurf to api. err: ", err);
      dispatch({
        type: SET_ERROR,
        payload: "error adding smurf to api",
      });
    });
};

export const removeSmurf = (smurfid) => (dispatch) => {
  axios
    .delete(`http://localhost:3333/smurfs/${smurfid}`)
    .then((res) => {
      console.log("removeSmurf -> res", res);
      dispatch({ type: REMOVE_SMURF, payload: smurfid });
    })
    .catch((err) => {
      console.error("error removing smurf from api. err:", err);
      dispatch({
        type: SET_ERROR,
        payload: "error removing smurf from api",
      });
    });
};
