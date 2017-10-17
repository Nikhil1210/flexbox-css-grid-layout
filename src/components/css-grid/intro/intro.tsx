import * as React from 'react';
import './intro.css';
import {CSSGrid, CSSGridExtended} from "../common/index";

class CSSGridIntro extends React.Component {
  render() {
    return (
      <div className="grid-parent-layout">
          <div className="grid-item-container">
            <div><code>display: grid;
                grid-template-columns: 1fr 2fr; <br/>
                grid-template-rows: 1fr 1fr;
                grid-gap: 2em 1em;</code></div><hr/>
              <CSSGrid containerClass="container-grid"/>
          </div>
          <div className="grid-item-container">
           <div><code>display: grid; 
                grid-template-columns: 1fr 2fr; <br/>
                grid-template-rows: 1fr 1fr;
                grid-auto-flow: column;<br/>
                grid-gap: 1em 2em;</code>
          </div><hr/>
          <CSSGrid containerClass="container-grid-flow-column"/>
          </div>
          <div className="grid-item-container">
            <div><code>display: grid;<br/>
              grid: 2fr 1fr/ 1fr 2fr;
              grid-gap: 1em;</code></div><hr/>
              <CSSGrid containerClass="grid-shorthand"/>
           </div>
          <div className="grid-item-container">
            <div>Shorthand Item 03:
              <code>display: grid;
              grid: 2fr 1fr/ 1fr 2fr;<br/>
              grid-column-start: 1;
              grid-column-end: 3;<br/>
              grid-row-start: 1;
              grid-row-end: 2;
              grid-gap: 1em;</code></div><hr/>
              <CSSGrid containerClass="grid-shorthand" item3Class="item3-custom-position"/>
           </div>
          <div className="grid-item-container">
            <div>Shorthand Item 01:
              <code>grid-column: 2/3;
                    grid-row: 2/3;
                    grid-gap: 1em;</code></div><hr/>
               <CSSGrid containerClass="grid-shorthand" item1Class="item1-custom-position"/>
          </div>
          <div className="grid-item-container">
            <div><code>
              display: grid;
              grid-template: repeat(2, 1fr)/ repeat(3, 25%)</code></div><hr/>
               <CSSGridExtended containerClass="container-grid-repeat"/>
          </div>
      </div>
    );
  }
}

export default CSSGridIntro;
