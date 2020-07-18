import React, { Component } from "react";
import {
  Header,
  Menu,
  Checkbox,
  Dropdown,
  Label,
  Form,
  Pagination,
} from "semantic-ui-react";

import MessageBox from "./MessageBox";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import LaunchList from "./LaunchList";
const tagOptions = [
  {
    key: "All Launches",
    text: "All ",
    value: "All",
    label: { color: "blue", empty: true, circular: true },
  },
  {
    key: "Successfull",
    text: "Successfull",
    value: "Successfull",
    label: { color: "green", empty: true, circular: true },
  },
  {
    key: "Failed",
    text: "Failed",
    value: "Failed",
    label: { color: "red", empty: true, circular: true },
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  modalClose = () => {
    this.setState({ modalIsOpen: false });
  };
  massageBoxStyle = {
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
      width: "450px",
      height: "250px",
      margin: "0 auto",
    },
  };

  render() {
    let { modalIsOpen } = this.state;
    return (
      <div>
        {modalIsOpen ? (
          <Modal
            modalAction={this.modalClose}
            modalIsOpen={true}
            modalStyle={this.massageBoxStyle}
            render={
              <MessageBox message="start date and end date should not be out od the range" />
            }
          />
        ) : (
          ""
        )}

        <div className="ui container">
          <div className="flex-nav">
            <div className="flex-nav">
              <Form>
                <div className="flex-nav filter-inputs-extra-margin">
                  <Form.Group>
                    <Form.Field className=" text-align-center">
                      <label>Start Date</label>
                      <DatePicker
                        // selected="2020/7/7"
                        selectsStart
                        isClearable
                        showYearDropdown
                        placeholderText="Start Date"
                      />
                    </Form.Field>

                    <Form.Field className=" text-align-center">
                      <label>End Date</label>
                      <DatePicker
                        // selected="2020/8/8"
                        selectsStart
                        isClearable
                        showYearDropdown
                        placeholderText="End Date"
                      />
                    </Form.Field>
                  </Form.Group>
                </div>
              </Form>
            </div>
            <div className="flex-nav">
              <Form.Field className="filter-inputs-extra-margin">
                <Checkbox
                  className="filter-inputs-font-style"
                  toggle
                  label="Upcomming Launches"
                />
              </Form.Field>
              <Form.Field className="filter-inputs-extra-margin">
                <Dropdown
                  className="filter-inputs-font-style"
                  icon="filter"
                  text="All Launches"
                >
                  <Dropdown.Menu>
                    <Dropdown.Menu scrolling>
                      {tagOptions.map((option) => (
                        <Dropdown.Item key={option.value} {...option} />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Field>
            </div>
          </div>
          {/* </Menu> */}
        </div>

        <div className="search-lable-container">
          <Header as="h4">Current Filters</Header>
          <Label.Group>
            <Label as="a" color="orange">
              Start-date 2014/02/08
            </Label>
            <Label as="a" color="olive">
              End-date 2014/02/08
            </Label>
            <Label as="a" color="green">
              Successfull
            </Label>
            <Label as="a" color="red">
              Failed
            </Label>
            <Label as="a" color="yellow">
              Upcomming
            </Label>
          </Label.Group>
        </div>

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
