import React from 'react';

class AddNew extends React.Component {
  render() {
    return (
      <div className="bl-domain bl-domain__new">
        <input type="url" placeholder="Add a Domain Name" />
      </div>
    );
  }
}

export default AddNew;