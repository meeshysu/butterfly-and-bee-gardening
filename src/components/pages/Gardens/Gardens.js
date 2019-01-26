import React from 'react';
import GardenForm from '../../GardenForm/GardenForm';
import './Gardens.scss';

class Gardens extends React.Component {
  render() {
    return (
      <div className='gardensPage mx-auto'>
    <h3>This be yo gardens page</h3>
    <GardenForm />
      </div>
    );
  }
}

export default Gardens;
