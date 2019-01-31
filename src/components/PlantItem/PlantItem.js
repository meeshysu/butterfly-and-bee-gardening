import React from 'react';
import plantShape from '../../helpers/propz/plantShape';
import myPlantsRequest from '../../helpers/data/myPlantsRequests';
import './PlantItem.scss';


goodbyeMyPlants = (unselectMeId) => {
  myPlantsRequest.deleteMyPlant(unselectMeId)
    .then(() => {
      this.makeButton();
    })
    .catch(err => console.error('error in goodbyeFriend', err));
};

// click event function

class PlantItem extends React.Component {
  static propTypes = {
    plants: plantShape,
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
          <button>unselect me</button>
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
