import React from "react";
import moment from "moment";

const validateDates = ({ startDate, endDate }) => {
  if (startDate && endDate) {
    let momentStartDate = moment(startDate);
    let momentEndDate = moment(endDate);
    if (!momentStartDate.isBefore(momentEndDate)) {
      return false;
    }
  }
  return true;
};

const renderLaunchStatusLable = (isUpcomming, launchStatus) => {
  if (isUpcomming) {
    return <div className="ui medium label yellow">Upcomming</div>;
  } else {
    if (launchStatus) {
      return <div className="ui medium label green">successful</div>;
    } else {
      return <div className="ui medium label red">Failed</div>;
    }
  }
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
      let defaultEndDate = moment("1900-03-24T22:30:00.000Z").format(
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
  queryString = queryString.join("&");

  if (isUpcomingLaunch) {
    return `/upcoming?${queryString}`;
  }
  return `?${queryString}`;
};

export { validateDates, renderLaunchStatusLable, generateQueryString };
