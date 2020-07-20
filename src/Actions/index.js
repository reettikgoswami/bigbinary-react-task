import axios from "axios";

import { generateQueryString } from "../utils/index";

export const updateStateWithFilterParameter = (filterParameters) => {
  return {
    type: "UPDATE_STATE_WITH_FILTER_PARAMETER",
    payload: { ...filterParameters, requestInProgress: true },
  };
};

export const fetchLaunchList = (searchParameters) => async (dispatch) => {
  try {
    const queryString = generateQueryString(searchParameters);
    let response = await axios.get(
      `https://api.spacexdata.com/v3/launches${queryString}`
    );
    let searchResultCount = response.headers["spacex-api-count"];
    let LaunchList = response.data;
    dispatch({
      type: "FETCH_LAUNCH_LIST",
      payload: { searchResultCount, LaunchList, requestInProgress: false },
    });
  } catch (error) {
    console.log(error);
  }
};
