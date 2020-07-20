import moment from "moment";
import axios from "axios";

export const updateStateWithFilterParameter = (filterParameters) => {
  return {
    type: "UPDATE_STATE_WITH_FILTER_PARAMETER",
    payload: { ...filterParameters, requestInProgress: true },
  };
};

const generateQueryString = (searchParameters) => {
  let queryString = [];
  let {
    startDate,
    endDate,
    isUpcomingLaunch,
    launchStatus,
    activePage,
  } = searchParameters;
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
  if (activePage) {
    const limit = 10;
    const offset = (activePage - 1) * limit;
    queryString.push(`limit=${limit}`);
    queryString.push(`offset=${offset}`);
  }
  console.log(activePage, "active page");
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
      payload: { searchResultCount, LaunchList, requestInProgress: false },
    });
  } catch (error) {
    console.log(error);
  }
};
