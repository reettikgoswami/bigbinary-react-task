import React from "react";
import { Item, Icon } from "semantic-ui-react";
import moment from "moment";
import { renderLaunchStatusLable } from "../utils/index";

const renderFooterLinks = (links) => {
  let {
    reddit_campaign,
    reddit_launch,
    reddit_media,
    article_link,
    wikipedia,
    video_link,
  } = links;
  return (
    <div className="modal_link_wrapper">
      {reddit_campaign ? (
        <a href={reddit_campaign}>
          <Icon name="reddit square" color="red" size="large" circular />
        </a>
      ) : null}
      {reddit_launch ? (
        <a href={reddit_launch}>
          <Icon name="reddit alien" color="red" size="large" circular />
        </a>
      ) : null}
      {reddit_media ? (
        <a href={reddit_media}>
          <Icon name="reddit" color="red" size="large" circular />
        </a>
      ) : null}
      {article_link ? (
        <a href={article_link}>
          <Icon name="medium m" size="large" circular />
        </a>
      ) : null}
      {wikipedia ? (
        <a href={wikipedia}>
          <Icon name="wikipedia w" size="large" circular />
        </a>
      ) : null}

      {video_link ? (
        <a href={video_link}>
          <Icon name="youtube play" color="red" size="large" circular />
        </a>
      ) : null}
    </div>
  );
};

function LaunchShow(props) {
  let {
    flight_number,
    rocket,
    mission_name,
    details,
    links,
    upcoming,
    launch_success,
    launch_date_utc,
    is_tentative,
    tentative_max_precision,
    launch_site,
  } = props.launchDetail;
  return (
    <div onClick={(e) => e.stopPropagation()} className="ui  modal_container">
      <div className="ui grid_margin">
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              className="mobile_view_hidden"
              src={
                links.mission_patch_small
                  ? links.mission_patch_small
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/Proton_Zvezda_crop.jpg"
              }
            />

            <Item.Content>
              <Item.Header as="a">{mission_name}</Item.Header>
              <Item.Meta>{rocket.rocket_name}</Item.Meta>
              <Item.Description>
                {details}
                {". "}
                {links.wikipedia ? (
                  <a href={links.wikipedia}>wikipedia</a>
                ) : null}
              </Item.Description>
              <Item.Extra>
                {renderLaunchStatusLable(upcoming, launch_success)}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="launch_information_wrapper">
          <div className="flex ">
            <div className="title ">
              <div className="field">Flight Number :</div>
            </div>
            <div className="detail">
              <div className="description">{flight_number}</div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                {" "}
                <nobr>Mission Name: </nobr>{" "}
              </div>
            </div>
            <div className="detail ">
              <div className="description">{mission_name}</div>
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
              <div className="description">{rocket.rocket_type} </div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">
                <nobr>Rocket name : </nobr>
              </div>
            </div>
            <div className="detail ">
              <div className="description">{rocket.rocket_name}</div>
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
              <div className="description">
                {rocket.second_stage.payloads[0].manufacturer}
              </div>
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
              <div className="description">
                {rocket.second_stage.payloads[0].nationality}
              </div>
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
              <div className="description">
                {moment(launch_date_utc).utc().format("DD MMMM YYYY HH:mm")}{" "}
                {is_tentative ? `(late ${tentative_max_precision})` : null}
              </div>
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
              <div className="description">
                {" "}
                {rocket.second_stage.payloads[0].payload_type}
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="title ">
              <div className="field">Orbit :</div>
            </div>
            <div className="detail">
              <div className="description">
                {rocket.second_stage.payloads[0].orbit}
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
              <div className="description">{launch_site.site_name}</div>
            </div>
          </div>
          {renderFooterLinks(links)}
        </div>
      </div>
    </div>
  );
}

export default LaunchShow;
