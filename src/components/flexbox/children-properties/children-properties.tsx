import * as React from 'react';
import './children-properties.css';
// import { Flex } from '../common';

export class FlexboxChildren extends React.Component {
  render() {
    return (
       <div className="parent">
           <div className="item-container">
            <div><code>display:flex</code> & child <code>flex:default;</code> <br/>
            Child grows based on content</div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex flex-default">
                    <em>short child</em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div><code>display:flex</code> & child <code>flex:default;</code> <br/>
            Child grows based on content</div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex flex-default">
                    <em>Lorem ipsum dolor sit </em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div><code>display:Flex</code><br/>
            Child to occupy all available space <code>flex-grow:1;</code></div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex-grow-1">
                    <em>I'll grow till the end</em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div><code>display:flex </code><br/>
            Irrespective of content, Child width is fixed <code>flex-basis: 40%;</code></div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex-basis-40">
                    <em>Lorem ipsum dolor sit </em>
                </div>
              </div> 
            </div>
            {/* <div className="item-container">
            <div>Child occupy min space <br/> <code>display:flex <br/>flex-basis: 0;</code></div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex-basis-0">
                    <em>Lorem ipsum dolor sit </em>
                </div>
              </div> 
            </div> */}
            <div className="item-container">
             <div> <code>display:flex</code><br/>
            Using shorthand notation <code> flex:1 </code>implies 
            <code> flex: 1 1 0 </code> </div><hr/>
              <div className="container-flex-grow">
                <div className="item-flex-1">
                    <em>Lorem ipsum dolor sit </em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div> <code>display:flex</code><br/>
             <code> flex: 0 1 auto </code> is equivalent to <code>flex:default;</code></div><hr/>
              <div className="container-flex-grow">
                <div className="flex-item-01 flex-default">
                    <em>Lorem ipsum dolor sit amet, consectetur adipis </em>
                </div>
                <div className="flex-item-02 flex-default">
                    <em>Lorem ipsum dolor sit </em>
                </div>
                <div className="flex-item-03 flex-default">
                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Fuga aliquid illo et delectus hic blanditiis vero quam nam fugiat ullam? </em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div> <code>display:flex</code><br/>
             <code> flex: 0 0 auto </code> neither grow, nor shrink</div><hr/>
              <div className="container-flex-grow">
                <div className="flex-0-0-auto">
                    <em>Lorem ipsum dolor sit amet, consectetur adipis </em>
                </div>
              </div> 
            </div>
             <div className="item-container">
            <div> <code>display:flex</code><br/>
            <code> flex: 30%  </code>implies
             <code> flex: 1 1 30% </code> <br/>which is as good as <code> flex:1</code></div><hr/>
              <div className="container-flex-grow">
                <div className="flex-30percent">
                    <em>Lorem ipsum dolor sit amet, consectetur adipis </em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div> <code>flex:auto</code> equivalent to <code> flex: 1 1 auto </code><br/>
            Elements get space based on the content</div><hr/>
              <div className="container-flex-default-no-wrap">
                <div className="flex-item-02 flex-auto">
                    <em>Lorem ipsum dolor sit </em>
                </div>
                <div className="flex-item-03 flex-auto">
                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Fuga aliquid illo et delectus hic blanditiis vero quam nam fugiat ullam? </em>
                </div>
              </div> 
            </div>
            <div className="item-container">
            <div> <code>flex:none</code> equivalent to <code> flex: 0 0 auto </code><br/>
            Elements neither grow, nor shrink and get space based on the content</div><hr/>
              <div className="container-flex-default-no-wrap">
                <div className="flex-item-02 flex-none">
                    <em>Lorem ipsum dolor sit </em>
                </div>
                <div className="flex-item-03 flex-none">
                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Fuga aliquid illo et delectus hic blanditiis vero quam nam fugiat ullam? </em>
                </div>
              </div> 
            </div> 
      </div>
    );
  }
}