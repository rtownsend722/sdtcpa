import React, { Component } from 'react';

import Head from '../head/Head';
import Foot from '../foot/Foot';
import '../index.css';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Head />
        <div>
          some stuff here
        </div>
        <Foot />
      </div>
    )
  }
}