import * as React from 'react';
import './intro.css';
import {Flex, FlexExtended, Flex2UnEqualItems, Flex3DifferWidth} from '../common';

class FlexboxIntro extends React.Component {
  render() {
    return (
       <div className="parent">
          <div className="item-container">
            <div><code>display: flex;</code></div><hr/>
              <Flex containerClass="container-flex"/>
          </div>
          <div className="item-container">
            <div><code>display: inline-flex;</code></div><hr/>
              <Flex containerClass="container-inline-flex"/>
          </div>
          <div className="item-container">
            <div><code>display: flex;<br/>flex-direction: column;</code></div><hr/>
              <Flex containerClass="container-direction-column"/>
           </div>
          <div className="item-container">
            <div><code>display: flex;<br/>flex-direction: column-reverse;</code></div><hr/>
               <Flex containerClass="container-direction-column-reverse"/>
          </div>
          <div className="item-container">
            <div>Default <code>display: flex;</code></div><hr/>
               <FlexExtended containerClass="container-flex-default-no-wrap"/>
          </div>
          <div className="item-container">
            <div><code>display: flex;<br/>flex-wrap: wrap;</code></div><hr/>
               <FlexExtended containerClass="container-flex-wrap"/>
          </div>
          {/* <div className="item-container">
            <div>Two equal width items: <code>flex:1;</code></div><hr/>
               <Flex2EqualItems/>
          </div> */}
          <div className="item-container">
            <div> <code>flex:1;</code>aka <code>flex:1 1 0;</code><br/>
            Two items of differ content but equal width and height</div><hr/>
               <Flex2UnEqualItems/>
          </div>
           
          <div className="item-container">
            <div>Item 01-<code>flex:1;</code> Item 03- <code>flex:1;</code><br/>
              Item 02 is twice the width of rest- <code>flex:2;</code></div><hr/>
               <Flex3DifferWidth/>
          </div>
      </div>
    );
  }
}

export default FlexboxIntro;
