import React, { Component } from "react";

class LaunchList extends Component {
  render() {
    return (
      <>
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
                <tr>
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
