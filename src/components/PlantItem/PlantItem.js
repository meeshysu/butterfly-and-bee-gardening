import React from 'react';
// import PropTypes from 'prop-types';
import plantShape from '../../helpers/propz/plantShape';
import plantRequests from '../../helpers/data/plantRequest';
import './PlantItem.scss';

class PlantItem extends React.Component {
  static propTypes = {
    plant: plantShape.plantShape,
  }

  render() {
    const { plant } = this.props;
    const plantId = plantRequests.getRequest();
    console.log(plantId);
    return (
      <div className='printed-plant-card'>
        <span className='plant-image'>{plant.image}</span>
        <span className='plant-image'>{plant.name}</span>
        <span className='plant-image'>{plant.size}</span>
        <span className='plant-image'>{plant.sun}</span>
        <span className='plant-image'>{plant.color}</span>
        <span className='plant-image'>{plant.description}</span>
      </div>
    );
  }
}

export default PlantItem;
