import React, { Component } from "react";
import Modal from "./Modal";
import LaunchShow from "./LaunchShow";

class LaunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLaunchDetail: null,
    };
  }

  modalClose = () => {
    this.setState({ selectedLaunchDetail: null });
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
      width: "600px",
      margin: "0 auto",
    },
  };

  render() {
    let { selectedLaunchDetail } = this.state;
    return (
      <>
        {selectedLaunchDetail ? (
          <Modal
            modalAction={this.modalClose}
            modalIsOpen={true}
            modalStyle={this.modalStyle}
            render={
              <LaunchShow name="reettik" launchDetail={selectedLaunchDetail} />
            }
          />
        ) : (
          ""
        )}
        <table>
          <thead>
            <tr>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((launch) => {
              return (
                <tr
                  onClick={() =>
                    this.setState({ selectedLaunchDetail: launch })
                  }
                >
                  <td data-column="Launched (UTC)">
                    {" "}
                    <nobr> 30 Jun 2020 20:10:00 </nobr>
                  </td>
                  <td data-column="Location">
                    <nobr> CCAFS SLC-40 </nobr>
                  </td>
                  <td data-column="Mission">
                    <nobr> Crew Dragon Demo 2 </nobr>
                  </td>
                  <td data-column="Orbit">
                    <nobr> MEO </nobr>
                  </td>
                  <td data-column="Launch Status">
                    <nobr>
                      {" "}
                      <div class="ui medium label green">success</div>{" "}
                    </nobr>
                  </td>
                  <td data-column="Rocket">
                    <nobr> Falcon 9 </nobr>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default LaunchList;
