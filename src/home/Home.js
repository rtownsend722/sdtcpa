import React, { Component } from "react";
import Head from "../head/Head";
import Services from "../services/Services";
import "../index.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Head />
        <Services />
      </div>
    );
  }
}
