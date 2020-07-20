const INITIAL_STATE = {
  startDate: null,
  endDate: null,
  LaunchList: [],
  searchResultCount: 0,
  activePage: 1,
  isUpcomingLaunch: false,
  launchStatus: "All",
  requestInProgress: false,
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
