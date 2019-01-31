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
          // onlick on add me for the post request
          // create a function that gets the axios call,
          // like above, just call it right here in this.add
        );
      }
      if (plant.myPlantId !== 'sal' && plant.myPlantId) {
        return (
          <button onClick={this.goodbyeMyPlants}>unselect me</button>
        );
      }
      return '';
    };
    return (
      <ul className='card-body'>
        <img className='plant-image' src={plant.image} alt='plant' />
        {makeButton()}
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
