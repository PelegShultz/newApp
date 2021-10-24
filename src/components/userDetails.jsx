import React, { Component } from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import "../App.css";
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import Map from "./map.jsx";

class User extends Component {
  render() {
    const location = {
      address:
        this.props.address.street.number +
        " " +
        this.props.address.street.name +
        " " +
        this.props.address.city +
        " " +
        this.props.address.state +
        " " +
        this.props.address.country,

      coordinates: {
        lat: parseFloat(this.props.address.coordinates.latitude),
        lng: parseFloat(this.props.address.coordinates.longitude),
      },
    };
    return (
      <nav>
        <Helmet bodyAttributes={{ style: "background-color :  #002142" }}>
          <title>User Details</title>
        </Helmet>
        <div style={this.styles}>
          <img
            id="userImg"
            src={this.props.image.large}
            height="100"
            width="100"
            alt="user"
          />
          <div className="text">
            Name: {this.props.fullName.first + " " + this.props.fullName.last}
          </div>
          <div className="text">Email: {this.props.email}</div>
          <div className="text">Gender: {this.props.gender}</div>
          <div className="text">Age: {this.props.age}</div>
          <div className="text">
            Address: {location.address}
            <Map location={location} zoomLevel={13} />
          </div>
        </div>
      </nav>
    );
  }
  styles = {
    height: "80%",
    width: "30%",
    background: "radial-gradient(circle,white, grey)",
    margin:
      "4% auto" /* the auto is so that the margin keeps getting bigger with the windows*/,
    padding: 20,
    borderRaduis: 10,
    boxShadow: "0px 0px 20px #3198ff",
    position: "fixed",
    left: "33%",
  };
}
export default User;
