import axios from "axios";
import { FETCH_JOBS } from "./types";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";
import { keys } from "./keys";

const JOB_QUERY_PARAMS = {
  publisher: keys.INDEED_API,
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript",
};

const constructUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${keys.INDEED_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region, keys.GOOGL_MAPS_API);
    const url = constructUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
