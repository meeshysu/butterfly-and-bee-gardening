import React from 'react';
import plantShape from '../../helpers/propz/plantShape';
// import plantRequests from '../../helpers/data/plantRequest';
import './PlantItem.scss';

class PlantItem extends React.Component {
  static propTypes = {
    plants: plantShape,
  }

  render() {
    const { plant } = this.props;
    return (
      <span className='row'>
        <span className='card-body'>
          <span className='plant-image'>{plant.image}</span>
          <span className='plant-name'>{plant.name}</span>
          <span className='plant-size'>{plant.size}</span>
          <span className='plant-sun'>{plant.sun}</span>
          <span className='plant-color'>{plant.color}</span>
          <span className='plant-description'>{plant.description}</span>
        </span>
      </span>
    );
  }
}

export default PlantItem;
