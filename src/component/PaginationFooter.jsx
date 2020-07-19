import React, { Component } from "react";
import { connect } from "react-redux";

import { Pagination } from "semantic-ui-react";

class PaginationFooter extends Component {
  render() {
    return (
      <div className="text-align-center pagination-component-wrapper ">
        <Pagination
          activePage={5}
          boundaryRange={1}
          // onPageChange={this.handlePaginationChange}
          size="tiny"
          siblingRange={1}
          totalPages={10}
          firstItem={null}
          lastItem={null}
          prevItem={null}
          nextItem={null}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, "pagination compononet");
  return {
    searchResultCount: state.searchResultCount,
  };
};

export default connect(mapStateToProps)(PaginationFooter);
