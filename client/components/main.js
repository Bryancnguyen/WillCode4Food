import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <div className="search-page">
        <h1>
          <Link to="/">Feel the Tweet</Link>
        </h1>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
