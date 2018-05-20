import React, { Component } from 'react';

import Head from '../head/Head';
import Foot from '../foot/Foot';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <Foot />
      </div>
    )
  }
}