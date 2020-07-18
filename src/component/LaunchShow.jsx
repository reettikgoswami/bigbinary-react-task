import React from "react";
import { Item, Label, Icon } from "semantic-ui-react";

function LaunchShow(props) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="ui  modal_container">
      <div className="ui grid_margin">
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              className="mobile_view_hidden"
              src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
            />

            <Item.Content>
              <Item.Header as="a">{props.name}</Item.Header>
              <Item.Meta>Merlin A</Item.Meta>
              <Item.Description>
                Engine failure at 33 seconds and loss of vehicle. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Reprehenderit
                Quisquam, recusandae reiciendis.
                <a href="https://en.wikipedia.org/wiki/DemoSat">wikipedia</a>
              </Item.Description>
              <Item.Extra>
                <Label color="green">Successfull</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="launch_information_wrapper">
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Mission Name: </nobr>{" "}
              </div>
            </div>
            <div className="detail ">
              <div className="description">FalconSat</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>rocket type : </nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description">Merlin C </div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                <nobr>Rocket name : </nobr>
              </div>
            </div>
            <div className="detail ">
              <div className="description">Falcon 1</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Manufacturer : </nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description">SSTL</div>
            </div>
          </div>
          <div className="flex">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Nationality : </nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description">United States</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Launch Date : </nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description">2006-03-24T22:30:00.000Z"</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Payload Type : </nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description"> Satellite</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">Orbit :</div>
            </div>
            <div className="detail">
              <div className="description">LEO</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">launch&nbsp;failure details :</div>
            </div>
            <div className="detail">
              <div className="description">
                Harmonic oscillation leading to premature engine shutdown
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                <nobr>launch site :</nobr>
              </div>
            </div>
            <div className="detail">
              <div className="description">HKwajalein Atoll Omelek Island</div>
            </div>
          </div>

          <div className="modal_link_wrapper">
            {/* <Header as="h5" icon textAlign="center"> */}
            <a href="">
              <Icon name="medium m" size="large" circular />
            </a>
            <a href="">
              <Icon name="wikipedia w" size="large" circular />
            </a>
            <a href="">
              <Icon name="youtube play" size="large" color="red" circular />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchShow;
