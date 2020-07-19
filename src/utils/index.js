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

export { validateDates, renderLaunchStatusLable };
