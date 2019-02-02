import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../helpers/propz/plantShape';
import './PlantItem.scss';

const defaultValue = {
  gardenId: '',
  plantId: '',
};

class PlantItem extends React.Component {
  static propTypes = {
    plant: plantShape,
    updatePlantState: PropTypes.func,
    gardenId: PropTypes.string,
  }

  state = {
    plantObject: defaultValue,
  }

  goodbyeMyPlants = () => {
    const { plant, updatePlantState } = this.props;
    updatePlantState('delete', plant.myPlantId, {});
  }

  helloMyPlants = () => {
    const plantObject = { ...this.state.plantObject };
    const { plant, updatePlantState, gardenId } = this.props;
    plantObject.plantId = plant.id;
    plantObject.gardenId = gardenId;
    updatePlantState('create', 'none', plantObject);
  }

  render() {
    const { plant } = this.props;
    const makeButton = () => {
      if (plant.myPlantId === 'sal') {
        return (
          <button onClick={this.helloMyPlants}>add me</button>
        );
      }
      if (plant.myPlantId !== 'sal' && plant.myPlantId) {
        return (
          <button onClick={this.goodbyeMyPlants}>unselect me</button>
        );
      }
      return '';
    };
    const sunIcons = () => {
      if (plant.sun === 'Full Sun') {
        return (
          <i className="fas fa-sun fa-2x"></i>
        );
      }
      if (plant.sun === 'Full sun to part shade') {
        return (
          <i className="fas fa-cloud-sun fa-2x"></i>
        );
      }
      if (plant.sun === 'Morning Sun') {
        return (
          <i className="far fa-sun fa-2x"></i>
        );
      }
      return '';
    };
    // const sizeIcons = () => {
    //   if (plant.size === 'Small') {
    //     return (
    //       <i class="fab fa-stripe-s"></i>
    //     );
    //   }
    //   if (plant.size === 'Medium') {
    //     return (
    //       <i class="fab fa-medium-m"></i>
    //     );
    //   }
      // if (plant.size === 'Large') {
      //   return (
      //   );
      // }
    // };
    return (
      <ul className='card-body'>
        <img className='plant-image' src={plant.image} alt='plant' />
        {makeButton()}
        <li className='plant-name'>{plant.name}</li>
        <li className='plant-size'>{plant.size}</li>
        <li className='plant-sun'>{sunIcons()}</li>
        <li className='plant-color'>{plant.color}</li>
        <li className='plant-description'>{plant.description}</li>
      </ul>
    );
  }
}

export default PlantItem;
