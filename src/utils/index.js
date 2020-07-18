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

export { validateDates };
