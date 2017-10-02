import * as React from 'react';
import './justify-content.css';
import {
  JustifyFlexStart,
  JustifyFlexEnd,
  JustifyFlexCenter,
  JustifyFlexSpaceBetween,
  JustifyFlexSpaceAround,
  JustifyFlexSpaceEvenly
} from "../common/common-justify-content";

export class FlexboxJustifyContent extends React.Component {
  render() {
    return (
       <div className="parent">
           <div className="item-container">
            <div>Flex Start</div><hr/>
              <JustifyFlexStart/>
          </div>
           <div className="item-container">
            <div>Flex End</div><hr/>
              <JustifyFlexEnd/>
          </div>
           <div className="item-container">
            <div>Flex Center</div><hr/>
              <JustifyFlexCenter/>
          </div>
          <div className="item-container">
            <div>Space between</div><hr/>
              <JustifyFlexSpaceBetween/>
          </div>
          <div className="item-container">
            <div>Space Around</div><hr/>
              <JustifyFlexSpaceAround/>
          </div>
          <div className="item-container">
            <div>Space Evenly</div><hr/>
              <JustifyFlexSpaceEvenly/>
          </div>
      </div>
    );
  }
}