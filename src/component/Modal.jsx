import React, { Component } from "react";

import ReactModal from "react-modal";

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
          <button onClick={() => this.props.modalAction()}>close</button>

          {this.props.render}
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
