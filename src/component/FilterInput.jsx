import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
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

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMassage: "",
    };
  }
  closeModal = () => {
    this.setState({ errorMassage: "" });
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

  setDate = (e, { name, value }) => {
    let { startDate, endDate } = this.props;
    if (validateDates({ startDate, endDate, [name]: value })) {
      return this.props.updateStateWithFilterParameter({ [name]: value });
    } else {
      return this.setState({
        errorMassage: "End date should be greater than Start date",
      });
    }
  };

  render() {
    let { errorMassage } = this.state;
    let { startDate, endDate } = this.props;
    return (
      <div>
        {errorMassage ? (
          <Modal
            modalAction={this.closeModal}
            modalIsOpen={true}
            modalStyle={this.massageBoxStyle}
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
                      {launchStatusOption.map((option) => (
                        <Dropdown.Item key={option.value} {...option} />
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    startDate: state.startDate,
    endDate: state.endDate,
  };
};
export default connect(mapStateToProps, { updateStateWithFilterParameter })(
  FilterInput
);
