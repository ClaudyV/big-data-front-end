import axios from "axios";
import { GET_ALL_YEARS_API } from "../utils/apiEndpoints";
import { handleError, handleResponse } from "./responseHandler";

// Get all years
const getAllYears = async () => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };
  return axios
    .get(process.env.REACT_APP_API_URL + GET_ALL_YEARS_API, {
      headers,
    })
    .then(handleResponse)
    .catch(handleError);
};

export const apiStatistics = {
  getAllYears,
};
