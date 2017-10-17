import * as React from 'react';
import './align-items.css';
import {Flex, FlexExtended} from '../common';

export class FlexboxAlignItems extends React.Component {
  render() {
    return (
       <div className="parent">
           <div className="item-container">
            <div><code>display: flex;<br/> align-items: flex-start</code></div><hr/>
              <Flex containerClass="container-align-flex-start"/>   
            </div>
           <div className="item-container">
            <div><code> display: flex;<br/>align-items: flex-end </code></div><hr/>
              <Flex containerClass="container-align-flex-end"/>   
          </div>
           <div className="item-container">
            <div> <code> display: flex;<br/>align-items: center</code> </div><hr/>
              <Flex containerClass="container-align-center"/>   
          </div>
           <div className="item-container">
            <div><code>display: flex;<br/>align-items: stretch</code></div><hr/>
              <Flex containerClass="container-align-stretch"/>   
          </div>
          <div className="item-container">
            <div><code> align-items: baseline</code></div><hr/>
              <Flex containerClass="container-align-baseline"/>   
          </div>
          <div className="item-container">
            <div> <code>align-items: flex-end;</code><br/>
              Item 02 <code>align-self:flex-start;</code> Item 03 <code>align-self: stretch;</code></div><hr/>
              <Flex containerClass="container-self-align" item2Class="align-top"
              item3Class="align-stretch"/>   
          </div>
 
           <div className="item-container">
            <div><code>align-content: flex-start</code></div><hr/>
              <FlexExtended containerClass="container-align-content-start"/>   
          </div>
           <div className="item-container">
            <div><code>align-content: flex-end</code></div><hr/>
              <FlexExtended containerClass="container-align-content-end"/>   
          </div>
           <div className="item-container">
            <div><code>align-content: center</code></div><hr/>
              <FlexExtended containerClass="container-align-content-center"/>   
          </div>
           <div className="item-container">
            <div><code>align-content: stretch</code></div><hr/>
              <FlexExtended containerClass="container-align-content-stretch"/>   
          </div>
           <div className="item-container">
            <div><code>align-content: space-between</code></div><hr/>
              <FlexExtended containerClass="container-align-content-space-between"/>   
          </div>
           <div className="item-container">
            <div><code>align-content: space-around</code></div><hr/>
              <FlexExtended containerClass="container-align-content-space-around"/>   
          </div>
      </div>
    );
  }
}