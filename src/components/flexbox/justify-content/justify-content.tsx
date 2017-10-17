import * as React from 'react';
import './justify-content.css';
import { Flex } from '../common';

export class FlexboxJustifyContent extends React.Component {
  render() {
    return (
       <div className="parent">
           <div className="item-container">
            <div><code>display: flex;<br/>justify-content: flex-start;</code></div><hr/>
              <Flex containerClass="container-flex-start"/>   
            </div>
           <div className="item-container">
            <div><code>display: flex;<br/>justify-content: flex-end;</code></div><hr/>
              <Flex containerClass="container-flex-end"/>   
          </div>
           <div className="item-container">
            <div><code>display: flex;<br/>justify-content: center;</code></div><hr/>
              <Flex containerClass="container-center"/>   
          </div>
          <div className="item-container">
            <div><code>display: flex;<br/>justify-content: space-between;</code></div><hr/>
              <Flex containerClass="container-space-between"/>   
          </div>
          <div className="item-container">
            <div><code>display: flex;<br/>justify-content: space-around;</code></div><hr/>
              <Flex containerClass="container-space-around"/>   
          </div>
          <div className="item-container">
            <div><code>display: flex;<br/>justify-content: space-evenly;</code></div><hr/>
              <Flex containerClass="container-space-evenly"/>   
          </div>
      </div>
    );
  }
}