import React from "react";

function MassageBox(props) {
  return (
    <div class="ui error message">
      <div class="content">
        <div class="header">Errors </div>
        <ul class="list">
          <li class="content">
            You must include both a upper and lower case letters in your
            password.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MassageBox;
