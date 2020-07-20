import React from "react";
import { Icon, Header, Message } from "semantic-ui-react";

function MassageBox(props) {
  console.log(props);
  return (
    <>
      <div className="ui">
        <Header as="h3">
          <Icon name="warning" color="" />
          <Header.Content className="warning">Warning</Header.Content>
        </Header>
        <div class="description" style={{ margin: "40px 0px 10px 0px" }}>
          <Message warning icon="warning sign" content={props.message} />
        </div>
      </div>
    </>
  );
}

export default MassageBox;
