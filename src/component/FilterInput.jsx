import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Checkbox, Dropdown, Form, Header, Label } from "semantic-ui-react";

import MessageBox from "./MessageBox";
import Modal from "./Modal";
import { validateDates } from "../utils/index";
import { updateStateWithFilterParameter } from "../Actions/index";

const launchStatusOption = [
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

const massageBoxStyle = {
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
    left: "0px",
    right: "0px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    maxWidth: "450px",
    height: "250px",
    margin: "0 auto",
  },
};

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMassage: "",
    };
  }

  toggleUpcommingLaunchInput = () => {
    if (this.props.launchStatus === "All" || this.props.launchStatus === "") {
      return this.props.updateStateWithFilterParameter({
        isUpcomingLaunch: !this.props.isUpcomingLaunch,
        activePage: 1,
      });
    } else {
      this.setState({
        errorMassage: (
          <p>
            Can not apply <strong> Upcomming Launches </strong> filter because
            you have already selected{" "}
            <strong> {this.props.launchStatus} Launches. </strong>
            <br />
            Both filter yield 0 result.
          </p>
        ),
      });
    }
  };

  handelLaunchStatus = (launchStatus) => {
    if (this.props.isUpcomingLaunch && launchStatus !== "All") {
      return this.setState({
        errorMassage: (
          <p>
            Can not apply <strong> Launch status </strong> filter because you
            have already selected <strong> Upcomming Launches </strong>
            <br />
            Both filter yield 0 result
          </p>
        ),
      });
    } else {
      if (this.props.launchStatus === launchStatus) {
        return;
      } else if (launchStatus === "All") {
        return this.props.updateStateWithFilterParameter({
          launchStatus: "All",
          activePage: 1,
        });
      } else if (launchStatus === "Successfull") {
        return this.props.updateStateWithFilterParameter({
          launchStatus: "Successfull",
          activePage: 1,
        });
      } else {
        return this.props.updateStateWithFilterParameter({
          launchStatus: "Failed",
          activePage: 1,
        });
      }
    }
  };
  closeModal = () => {
    this.setState({ errorMassage: "" });
  };

  setDate = (e, { name, value }) => {
    let { startDate, endDate } = this.props;
    if (validateDates({ startDate, endDate, [name]: value })) {
      return this.props.updateStateWithFilterParameter({
        [name]: value,
        activePage: 1,
      });
    } else {
      return this.setState({
        errorMassage: "End date should be greater than Start date",
      });
    }
  };

  renderCurrentFilterLables = ({
    startDate,
    endDate,
    isUpcomingLaunch,
    launchStatus,
  }) => {
    return (
      <Label.Group>
        {startDate ? (
          <Label color="orange">
            Start-date {moment(startDate).format("MMMM-DD_YYYY")}
          </Label>
        ) : null}
        {endDate ? (
          <Label color="olive">
            End-date {moment(endDate).format("MMMM-DD_YYYY")}
          </Label>
        ) : null}
        {launchStatus === "Successfull" ? (
          <Label color="green">Successfull</Label>
        ) : null}
        {launchStatus === "Failed" ? <Label color="red">Failed</Label> : null}
        {isUpcomingLaunch ? <Label color="yellow">Upcomming</Label> : null}
      </Label.Group>
    );
  };

  render() {
    let { errorMassage } = this.state;
    let { startDate, endDate, isUpcomingLaunch, launchStatus } = this.props;

    return (
      <div>
        {errorMassage ? (
          <Modal
            modalAction={this.closeModal}
            modalIsOpen={true}
            modalStyle={{ ...massageBoxStyle }}
            render={<MessageBox message={errorMassage} />}
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
                        selected={startDate}
                        selectsStart
                        isClearable
                        showYearDropdown
                        dateFormat="yyyy/MM/dd"
                        onChange={(e) =>
                          this.setDate(e, { value: e, name: "startDate" })
                        }
                        placeholderText="Start Date"
                      />
                    </Form.Field>

                    <Form.Field className="text-align-center">
                      <label>End Date</label>
                      <DatePicker
                        selected={endDate}
                        selectsStart
                        isClearable
                        showYearDropdown
                        dateFormat="yyyy/MM/dd"
                        onChange={(e) =>
                          this.setDate(e, { value: e, name: "endDate" })
                        }
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
                  checked={isUpcomingLaunch}
                  onChange={this.toggleUpcommingLaunchInput}
                />
              </Form.Field>
              <Form.Field className="filter-inputs-extra-margin">
                <Dropdown
                  className="filter-inputs-font-style"
                  icon="filter"
                  text={`${launchStatus} Launches`}
                >
                  <Dropdown.Menu>
                    <Dropdown.Menu scrolling>
                      {launchStatusOption.map((option) => (
                        <Dropdown.Item
                          // className="disabled"
                          key={option.value}
                          {...option}
                          onClick={() => this.handelLaunchStatus(option.value)}
                        />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Field>
            </div>
          </div>
        </div>
        <div className="search-lable-container">
          <Header
            as="h4"
            onClick={() => {
              this.setState({ modalIsOpen: true });
            }}
          >
            Current Filters
          </Header>
          {this.renderCurrentFilterLables(this.props)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    startDate: state.startDate,
    endDate: state.endDate,
    isUpcomingLaunch: state.isUpcomingLaunch,
    launchStatus: state.launchStatus,
  };
};
export default connect(mapStateToProps, { updateStateWithFilterParameter })(
  FilterInput
);
