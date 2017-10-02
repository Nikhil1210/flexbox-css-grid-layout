import * as React from 'react';
import './intro.css';
import {InlineFlex, Flex, FlexDirectionColumn, FlexDirectionColumnReverse} from '../common/common-intro';

class FlexboxIntro extends React.Component {
  render() {
    return (
       <div className="parent">
          <div className="item-container">
            <div>Flex</div><hr/>
              <Flex/>
          </div>
          <div className="item-container">
            <div>Inline flex</div><hr/>
              <InlineFlex/>
          </div>
          <div className="item-container">
            <div>Flex direction: column</div><hr/>
              <FlexDirectionColumn/>
          </div>
          <div className="item-container">
            <div>Flex direction: column-reverse</div><hr/>
              <FlexDirectionColumnReverse/>
          </div>
      </div>
    );
  }
}

export default FlexboxIntro;
