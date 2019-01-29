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
        <ul className='card-body'>
          <img className='plant-image' src={plant.image} alt='plant' />
          <li className='plant-name'>{plant.name}</li>
          <li className='plant-size'>{plant.size}</li>
          <li className='plant-sun'>{plant.sun}</li>
          <li className='plant-color'>{plant.color}</li>
          <li className='plant-description'>{plant.description}</li>
        </ul>
    );
  }
}

export default PlantItem;
