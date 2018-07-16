import React, { Component } from "react";
import Head from "../head/Head";
import "./about.css";
import "../index.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className="about">
          <div className="portrait">
            <img src={require("../images/portrait.jpg")} />
          </div>
          {/* <h4 className="about-header">About</h4> */}
          <p>
            With 30 years of experience in public practice and private business,
            I can assit in all of your accounting, tax, and financial needs.
          </p>
          <p>
            My investment of time and resources in professional continuing
            education, computer technology and business relationships are
            indicative of my commitment to excellence.
          </p>
          <p>
            I am a proud member of the New Jersey Society of Certified Public
            Accountants and the American Institute of Certified Public
            Accountants. I am a member of both the Personal Financial Planning
            and Tax Sections of the AICPA.
          </p>
          <p>
            I differentiate my practice from other firms by my detailed
            attention to your personal situation. I take time to fully
            understand your situation, and your goals before providing any
            advice or service. I understand that everyone’s situation is
            different and take pride in providing the type of personal
            experience and assistance that comes from many years of experience
            and financial acumen.
          </p>
          <p>
            I provide a wide range of services for individuals and businesses.
            My list of services is only a sample of the services that I can
            provide, and is by no means all-inclusive.
          </p>
        </div>
      </div>
    );
  }
}
