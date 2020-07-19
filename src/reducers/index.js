const INITIAL_STATE = {
  startDate: null,
  endDate: null,
  LaunchList: [],
  searchResultCount: 0,
  isUpcomingLaunch: false,
  launchStatus: "All",
};

let rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_STATE_WITH_FILTER_PARAMETER":
      return { ...state, ...action.payload };
    case "FETCH_LAUNCH_LIST":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default rootReducer;
