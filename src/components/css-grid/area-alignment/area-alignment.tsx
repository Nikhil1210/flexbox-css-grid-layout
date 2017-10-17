import * as React from 'react';
import './area-alignment.css';
import {CSSGrid} from "../common/index";

class CSSGridArea extends React.Component {
  render() {
    return (
      <div className="grid-parent-layout">
          <div className="grid-item-container">
            <div><code>display: grid;
                grid-template-columns: 1fr 2fr; <br/>
                grid-template-rows: 1fr 1fr;
                grid-gap: 2em 1em;</code></div><hr/>
              <CSSGrid containerClass="container-grid" />
          </div>
          
      </div>
    );
  }
}

export default CSSGridArea;
