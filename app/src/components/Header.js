import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="bl-header">
        <h1 className="bl-logo">Bought List</h1>
      </header>
    );
  }
}

export default Header;