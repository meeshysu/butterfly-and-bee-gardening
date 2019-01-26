import React from 'react';
import gardenShape from '../../helpers/propz/gardenShape';
import './GardenItem.scss';

class GardenItem extends React.Component {
  static propTypes = {
    gardens: gardenShape,
  }

  render() {
    const { garden } = this.props;
    return (
      <span className='row'>
        <span className='card-body'>
          <p className='garden-name'>{garden.name}</p>
          <p className='garden.description'>{garden.description}</p>
        </span>
      </span>
    );
  }
}

export default GardenItem;
