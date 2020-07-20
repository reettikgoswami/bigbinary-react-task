import React, { Component } from "react";

import Pagination from "./PaginationFooter";
import LaunchList from "./LaunchList";
import FilterInput from "./FilterInput";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <FilterInput />
        <LaunchList />
        <Pagination />
      </div>
    );
  }
}

export default Dashboard;
