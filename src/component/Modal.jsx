import React, { Component } from "react";

import ReactModal from "react-modal";
import { Icon } from "semantic-ui-react";

ReactModal.setAppElement("#root");

class Modal extends Component {
  render() {
    return (
      <div>
        <ReactModal
          style={this.props.modalStyle}
          isOpen={this.props.modalIsOpen}
          onRequestClose={() => this.props.modalAction()}
          contentLabel="Example Modal"
        >
          <div className="icon-position">
            <Icon
              link
              size="large"
              name="window close"
              onClick={() => this.props.modalAction()}
            />
          </div>
          {this.props.render}
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
