import axios from "axios";
import { FETCH_JOBS } from "./types";
import reverseGeocode from "latlng-to-zip";
import { JOB_QUERY_PARAMS, INDEED_ROOT_URL } from "../config/indeed_param";
import qs from "qs";

const constructUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${INDEED_ROOT_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
  console.log("from action", region);
  const { latitude, longitude } = region;
  try {
    let zip = await reverseGeocode({ latitude, longitude });
    const url = constructUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
