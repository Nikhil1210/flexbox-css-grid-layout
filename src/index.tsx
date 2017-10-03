import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Grid
} from 'react-bootstrap';
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSSGridIntro from './components/css-grid/intro/intro';
import FlexboxIntro from './components/flexbox/intro/intro';

import './index.css';
import {FlexboxJustifyContent} from "./components/flexbox/justify-content/justify-content";
import {FlexboxAlignItems} from "./components/flexbox/align-items/align-items";
import FlexboxWebLayout from "./components/flexbox/web-layout/web-layout";

ReactDOM.render(
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title="Flexbox" id="basic-nav-dropdown">
            <MenuItem href="flexbox-intro">Intro</MenuItem>
            <MenuItem href="flexbox-justify-content">Justify Content</MenuItem>
            <MenuItem href="flexbox-align-items">Align items</MenuItem>
            <MenuItem href="flexbox-web-layout">Web Layout</MenuItem>
          </NavDropdown>
          <NavDropdown title="CSS Grid" id="basic-nav-dropdown">
            <MenuItem href="cssgrid-intro">Intro</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

    <Router>  
      <Grid>
        <Route exact path="/" component={App}/>
        <Route path="/flexbox-intro" component={FlexboxIntro}/>     
        <Route path="/flexbox-justify-content" component={FlexboxJustifyContent}/>
        <Route path="/flexbox-align-items" component={FlexboxAlignItems}/>
        <Route path="/flexbox-web-layout" component={FlexboxWebLayout}/>
        <Route path="/cssgrid-intro" component={CSSGridIntro}/>
      </Grid>
    </Router>
    </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
