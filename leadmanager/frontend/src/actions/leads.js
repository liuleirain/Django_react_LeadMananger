import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// Get Leads
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Lead
export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadDeleted: "客户已删除" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Add Lead
export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadAdded: "客户已添加" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
