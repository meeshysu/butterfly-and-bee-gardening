import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../helpers/propz/plantShape';
// import myPlantsRequest from '../../helpers/data/myPlantsRequests';
import './PlantItem.scss';
import myPlantsRequests from '../../helpers/data/myPlantsRequests';

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
    myPlantsRequests.deleteMyPlant(plant.myPlantId)
      .then(() => {
        updatePlantState();
      })
      .catch(err => console.error('error with goodbyeMyPlants', err));
  }

  helloMyPlants = () => {
    const { plantObject } = this.state;
    const { plant, updatePlantState, gardenId  } = this.props;
    plantObject.plantId = plant.id;
    plantObject.gardenId = gardenId;
    myPlantsRequests.myPlantPost(plantObject)
      .then(() => {
        updatePlantState();
      })
      .catch(error => console.error(error));
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
          <i class="fas fa-cloud-sun fa-2x"></i>
        );
      }
      if (plant.sun === 'Morning Sun') {
        return (
          <i class="far fa-sun fa-2x"></i>
        );
      }
    };
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
