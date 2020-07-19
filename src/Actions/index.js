import moment from "moment";
import axios from "axios";

export const updateStateWithFilterParameter = (filterParameters) => {
  return {
    type: "UPDATE_STATE_WITH_FILTER_PARAMETER",
    payload: filterParameters,
  };
};

const generateQueryString = (searchParameters) => {
  let queryString = [];
  let { startDate, endDate } = searchParameters;
  if (startDate) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    queryString.push(`start=${startDate}`);
    if (!endDate) {
      let defaultEndDate = moment("2050-03-24T22:30:00.000Z").format(
        "YYYY-MM-DD"
      );
      queryString.push(`end=${defaultEndDate}`);
    }
  }
  if (endDate) {
    endDate = moment(endDate).format("YYYY-MM-DD");
    queryString.push(`end=${endDate}`);
    if (!startDate) {
      let defaultEndDate = moment("2005-03-24T22:30:00.000Z").format(
        "YYYY-MM-DD"
      );
      queryString.push(`start=${defaultEndDate}`);
    }
  }
  return queryString;
};

export const fetchLaunchList = (searchParameters) => async (dispatch) => {
  try {
    const queryString = generateQueryString(searchParameters).join("&");
    console.log(queryString);
    let response = await axios.get(
      `https://api.spacexdata.com/v3/launches?${queryString}`
    );
    console.log(response);
    let searchResultCount = response.headers["spacex-api-count"];
    let LaunchList = response.data;

    console.log(searchResultCount);
    console.log(LaunchList);
    dispatch({
      type: "FETCH_LAUNCH_LIST",
      payload: { searchResultCount, LaunchList },
    });
  } catch (error) {
    console.log(error);
  }
};
