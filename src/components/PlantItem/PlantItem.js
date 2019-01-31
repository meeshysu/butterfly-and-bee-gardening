import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../helpers/propz/plantShape';
// import myPlantsRequest from '../../helpers/data/myPlantsRequests';
import './PlantItem.scss';
import myPlantsRequests from '../../helpers/data/myPlantsRequests';

class PlantItem extends React.Component {
  static propTypes = {
    plants: plantShape,
    updatePlantState: PropTypes.func,
  }

  // // click event function
  // goodbyeMyPlantsEvent = (e) => {
  //   e.preventDefault();
  //   const { goodbyeMyPlants, plant } = this.props;
  //   goodbyeMyPlants(plant.myPlantId);
  // };

  goodbyeMyPlants = () => {
    const { plant, updatePlantState } = this.props;
    myPlantsRequests.deleteMyPlant(plant.myPlantId)
      .then(() => {
        updatePlantState();
      })
      .catch(err => console.error('error with goodbyeMyPlants', err));
  }

  render() {
    const { plant } = this.props;
    const makeButton = () => {
      if (plant.myPlantId === 'sal') {
        return (
          <button>add me</button>
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
