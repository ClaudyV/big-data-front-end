import axios from "axios";
import { GET_ALL_YEARS_API, GET_STATISTICS_API } from "../utils/apiEndpoints";
import { handleError, handleResponse } from "./responseHandler";

interface Statistics {
  year: string | null;
  county: string | null;
  district: string | null;
}

interface StatProps {
  stats: Statistics | null;
}

// Get all years
const getAllYears = async () => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };
  return axios
    .get(`${process.env.REACT_APP_API_URL}${GET_ALL_YEARS_API}`, {
      headers,
    })
    .then(handleResponse)
    .catch(handleError);
};

// Get household ordinary and household single by year, county and district
const getHouseholdStatistics = async ({ stats }: StatProps) => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };
  return axios
    .get(
      `${process.env.REACT_APP_API_URL}${GET_STATISTICS_API}/${stats?.year}?COUNTY=${stats?.county}&TOWN=${stats?.district}`,
      {
        headers,
      }
    )
    .then(handleResponse)
    .catch(handleError);
};

export const apiStatistics = {
  getAllYears,
  getHouseholdStatistics,
};
