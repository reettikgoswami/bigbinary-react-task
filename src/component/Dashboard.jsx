import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";

import LaunchList from "./LaunchList";
import FilterInput from "./FilterInput";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    return (
      <div>
        <FilterInput />

        <LaunchList />
        <div className="text-align-center pagination-component-wrapper ">
          <Pagination
            activePage={4}
            boundaryRange={1}
            // onPageChange={this.handlePaginationChange}
            size="tiny"
            siblingRange={1}
            totalPages={10}
            lastItem={null}
            prevItem={null}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
