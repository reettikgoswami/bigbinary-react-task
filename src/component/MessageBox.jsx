import React from "react";

function MassageBox(props) {
  console.log(props);
  return (
    <div className="ui error message">
      <div className="content">
        <div className="header">Errors </div>
        <ul className="list">
          <li className="content">{props.message}</li>
        </ul>
      </div>
    </div>
  );
}

export default MassageBox;
