import React from 'react';
import Header from './Header';
import Domain from './Domain';
import AddNew from './AddNew';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="bl-domain-list">
          <Domain />
        </div>

        <AddNew />
      </div>
    );
  }
}

export default App;