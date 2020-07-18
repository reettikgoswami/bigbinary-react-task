import React, { Component } from "react";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class Modal extends Component {
  render() {
    return (
      <div>
        <ReactModal
          style={{
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
              width: "600px",
              margin: "0 auto",
            },
          }}
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
