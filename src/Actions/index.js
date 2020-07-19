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
  console.log(searchParameters);
  let { startDate, endDate, isUpcomingLaunch, launchStatus } = searchParameters;
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
  if (launchStatus === "Successfull") {
    queryString.push(`launch_success=true`);
  } else if (launchStatus === "Failed") {
    queryString.push(`launch_success=false`);
  }

  queryString = queryString.join("&");

  if (isUpcomingLaunch) {
    return `/upcoming?${queryString}`;
  } else {
    return `?${queryString}`;
  }
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
      payload: { searchResultCount, LaunchList },
    });
  } catch (error) {
    console.log(error);
  }
};
