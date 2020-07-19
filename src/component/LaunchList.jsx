import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Segment, Loader, Dimmer } from "semantic-ui-react";
import Modal from "./Modal";
import LaunchShow from "./LaunchShow";
import { fetchLaunchList } from "../Actions/index";
import { renderLaunchStatusLable } from "../utils/index";
class LaunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLaunch: null,
    };
  }
  componentDidMount() {
    this.props.fetchLaunchList({});
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.isPropsChange(prevProps, prevState)) {
    //   return this.props.fetchLaunchList({
    //     startDate: this.props.startDate,
    //     endDate: this.props.endDate,
    //     isUpcomingLaunch: this.props.isUpcomingLaunch,
    //     launchStatus: this.props.launchStatus,
    //   });
    // }
  }

  isPropsChange = (prevProps, prevState) => {
    if (prevState.selectedLaunch !== this.state.selectedLaunch) {
      return false;
    } else {
      if (
        prevProps.startDate === this.props.startDate &&
        prevProps.endDate === this.props.endDate &&
        prevProps.isUpcomingLaunch === this.props.isUpcomingLaunch &&
        prevProps.launchStatus === this.props.launchStatus
      ) {
        return false;
      }
      return true;
    }
  };
  modalClose = () => {
    this.setState({ selectedLaunch: null });
  };
  modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      zIndex: 1000,
    },
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      maxWidth: "700px",
      margin: "0 auto",
    },
  };

  render() {
    let { selectedLaunch } = this.state;
    let { LaunchList, requestInProgress } = this.props;
    return (
      <>
        {selectedLaunch ? (
          <Modal
            modalAction={this.modalClose}
            modalIsOpen={true}
            modalStyle={this.modalStyle}
            render={<LaunchShow launchDetail={selectedLaunch} />}
          />
        ) : (
          ""
        )}
        {requestInProgress ? (
          <Segment className="ui container loader-segemnt">
            <Dimmer active inverted>
              <Loader size="medium">Loading</Loader>
            </Dimmer>
          </Segment>
        ) : (
          <table>
            <thead>
              <tr>
                <th>
                  <nobr>Flight Number</nobr>
                </th>
                <th>
                  <nobr> Launched (UTC) </nobr>
                </th>
                <th>
                  <nobr> Location </nobr>
                </th>
                <th>
                  <nobr> Mission </nobr>
                </th>
                <th>
                  <nobr> Orbit </nobr>
                </th>
                <th>
                  <nobr> Launch Status</nobr>
                </th>
                <th>
                  <nobr> Rocket </nobr>
                </th>
              </tr>
            </thead>
            <tbody>
              {LaunchList.map((launch) => {
                return (
                  <tr
                    key={launch.flight_number}
                    onClick={() => this.setState({ selectedLaunch: launch })}
                  >
                    <td data-column="Flight Number">
                      <nobr> {launch.flight_number} </nobr>
                    </td>
                    <td data-column="Launched (UTC)">
                      <nobr>
                        {moment(launch["launch_date_utc"])
                          .utc()
                          .format("DD MMMM YYYY HH:mm")}{" "}
                      </nobr>
                    </td>
                    <td data-column="Location">
                      <nobr> {launch.launch_site.site_name} </nobr>
                    </td>
                    <td data-column="Mission">
                      <nobr> {launch.mission_name} </nobr>
                    </td>
                    <td data-column="Orbit">
                      <nobr>
                        {launch.rocket.second_stage.payloads[0].orbit}
                      </nobr>
                    </td>
                    <td data-column="Launch Status">
                      <nobr>
                        {" "}
                        {renderLaunchStatusLable(
                          launch.upcoming,
                          launch.launch_success
                        )}
                      </nobr>
                    </td>
                    <td data-column="Rocket">
                      <nobr> {launch.rocket.rocket_name}</nobr>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { fetchLaunchList })(LaunchList);
