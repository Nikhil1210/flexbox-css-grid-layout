import * as React from 'react';
import './web-layout.css';

export default class FlexboxWebLayout extends React.Component {
  render() {
    return (
       <div className="layout-container">
          <div className="page-head">
            <h1>Header</h1>
                </div>
            
        <main className="page-content">
            <nav className="content-navigation">
                <h1>Navigation</h1>
            </nav>
            <article className="content-article">
                <h1>Main Content</h1>
            </article>
            <aside className="content-sidebar">
                <h1>Sidebar</h1>
            </aside>
        </main>
        
        <footer className="page-footer">
            <h1>Footer</h1>
        </footer>
      </div>
    );
  }
}
