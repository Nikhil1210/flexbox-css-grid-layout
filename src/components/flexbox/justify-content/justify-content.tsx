import * as React from 'react';
import './justify-content.css';
import { Flex } from '../common';

export class FlexboxJustifyContent extends React.Component {
  render() {
    return (
       <div className="parent">
           <div className="item-container">
            <div>Flex Start</div><hr/>
              <Flex containerClass="container-flex-start"/>   
            </div>
           <div className="item-container">
            <div>Flex End</div><hr/>
              <Flex containerClass="container-flex-end"/>   
          </div>
           <div className="item-container">
            <div>Flex Center</div><hr/>
              <Flex containerClass="container-center"/>   
          </div>
          <div className="item-container">
            <div>Space between</div><hr/>
              <Flex containerClass="container-space-between"/>   
          </div>
          <div className="item-container">
            <div>Space Around</div><hr/>
              <Flex containerClass="container-space-around"/>   
          </div>
          <div className="item-container">
            <div>Space Evenly</div><hr/>
              <Flex containerClass="container-space-evenly"/>   
          </div>
      </div>
    );
  }
}