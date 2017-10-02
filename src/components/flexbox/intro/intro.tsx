import * as React from 'react';
import './intro.css';
import {Flex, FlexExtended} from '../common';

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
          
      </div>
    );
  }
}

export default FlexboxIntro;
