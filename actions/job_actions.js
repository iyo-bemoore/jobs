import axios from "axios";
import { FETCH_JOBS } from "./types";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

const INDEED_API = "8769962633668405";
const INDEED_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const GOOGL_MAPS_API = "AIzaSyCjEjD_MJ70jXHuhR7T62ZV6ZDRIokMihE";

const JOB_QUERY_PARAMS = {
  publisher: INDEED_API,
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript"
};

const constructUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${INDEED_ROOT_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
  try {
    let zip = await reverseGeocode(region, GOOGL_MAPS_API);
    const url = constructUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
