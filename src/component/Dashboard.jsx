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
  render() {
    return (
      <div>
        {/* navbar */}
        <div className="ui container background-image">
          <Menu secondary>
            <Form>
              <Form.Group>
                <Menu.Item>
                  <Form.Field className="text-align-center">
                    <label>Start Date</label>
                    <DatePicker
                      // selected="2020/7/7"
                      selectsStart
                      isClearable
                      showYearDropdown
                      placeholderText="Start Date"
                    />
                  </Form.Field>
                </Menu.Item>

                <Menu.Item>
                  <Form.Field className="text-align-center">
                    <label>End Date</label>
                    <DatePicker
                      // selected="2020/8/8"
                      selectsStart
                      isClearable
                      showYearDropdown
                      placeholderText="End Date"
                    />
                  </Form.Field>
                </Menu.Item>
              </Form.Group>
            </Form>
            <Menu.Menu position="right">
              <Menu.Item>
                <Form.Field>
                  <Checkbox toggle label="Disabled" />
                </Form.Field>
              </Menu.Item>

              <Menu.Item>
                <Dropdown text="All Launches" icon="filter">
                  <Dropdown.Menu>
                    <Dropdown.Menu scrolling>
                      {tagOptions.map((option) => (
                        <Dropdown.Item key={option.value} {...option} />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
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
