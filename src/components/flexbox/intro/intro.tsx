import * as React from 'react';
import './intro.css';
import {Flex, FlexExtended, Flex2EqualItems, Flex2UnEqualItems, Flex3DifferWidth} from '../common';

class FlexboxIntro extends React.Component {
  render() {
    return (
       <div className="parent">
          <div className="item-container">
            <div>Flex</div><hr/>
              <Flex containerClass="container-flex"/>
          </div>
          <div className="item-container">
            <div>Inline flex</div><hr/>
              <Flex containerClass="container-inline-flex"/>
          </div>
          <div className="item-container">
            <div>Flex direction: column</div><hr/>
              <Flex containerClass="container-direction-column"/>
           </div>
          <div className="item-container">
            <div>Flex direction: column-reverse</div><hr/>
               <Flex containerClass="container-direction-column-reverse"/>
          </div>
          <div className="item-container">
            <div>Flex default: no wrap</div><hr/>
               <FlexExtended containerClass="container-flex-default-no-wrap"/>
          </div>
          <div className="item-container">
            <div>Flex wrap</div><hr/>
               <FlexExtended containerClass="container-flex-wrap"/>
          </div>
          <div className="item-container">
            <div>Two equal width items: <code>flex:1;</code></div><hr/>
               <Flex2EqualItems/>
          </div>
          <div className="item-container">
            <div>Two items of differ content but equal width: <code>flex:1;</code></div><hr/>
               <Flex2UnEqualItems/>
          </div>
          <div className="item-container">
            <div>Item 2 is twice the width of rest: <code>Item02-flex:0 0 50%; Item01 & Item03-flex:1;</code></div><hr/>
               <Flex3DifferWidth/>
          </div>
          
      </div>
    );
  }
}

export default FlexboxIntro;
