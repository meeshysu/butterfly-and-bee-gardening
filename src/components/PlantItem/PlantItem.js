import React from 'react';
import plantShape from '../../helpers/propz/plantShape';
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
          <img className='plant-image' src={plant.image} alt='plant' />
          <p className='plant-name'>{plant.name}</p>
          <p className='plant-size'>{plant.size}</p>
          <p className='plant-sun'>{plant.sun}</p>
          <p className='plant-color'>{plant.color}</p>
          <p className='plant-description'>{plant.description}</p>
        </span>
      </span>
    );
  }
}

export default PlantItem;
