import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "semantic-ui-react";

import { updateStateWithFilterParameter } from "../Actions/index";

class PaginationFooter extends Component {
  handlePaginationChange = (e, { activePage }) => {
    this.props.updateStateWithFilterParameter({ activePage });
  };
  render() {
    let { searchResultCount, activePage } = this.props;
    let maxLimit = 10;
    return (
      <>
        {searchResultCount > maxLimit ? (
          <div className="text-align-center pagination-component-wrapper ">
            <Pagination
              activePage={activePage}
              boundaryRange={1}
              onPageChange={this.handlePaginationChange}
              size="tiny"
              siblingRange={1}
              totalPages={Math.ceil(searchResultCount / maxLimit)}
              firstItem={null}
              lastItem={null}
              prevItem={null}
              nextItem={null}
            />
          </div>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchResultCount: state.searchResultCount,
    activePage: state.activePage,
  };
};

export default connect(mapStateToProps, { updateStateWithFilterParameter })(
  PaginationFooter
);
