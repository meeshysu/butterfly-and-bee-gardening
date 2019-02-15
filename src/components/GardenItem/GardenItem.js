import React from 'react';
import PropTypes from 'prop-types';
import gardenShape from '../../helpers/propz/gardenShape';
import myPlantsRequest from '../../helpers/data/myPlantsRequests';
import './GardenItem.scss';

class GardenItem extends React.Component {
  static propTypes = {
    garden: gardenShape,
    deleteSingleGarden: PropTypes.func,
    passGardenToEdit: PropTypes.func,
    passGardenToDetails: PropTypes.func,
    getMyPlantsPlants: PropTypes.func,
  }

  deleteGardenEvent = (e) => {
    e.preventDefault();
    const { deleteSingleGarden, garden } = this.props;
    myPlantsRequest.getMyPlantsByGardenId(garden.id)
      .then((myPlants) => {
        myPlants.forEach((plant) => {
          myPlantsRequest.deleteMyPlant(plant.id);
        });
      })
      .catch(err => console.error('error in deletegardenevent', err));
    deleteSingleGarden(garden.id);
  }

  editGardenEvent = (e) => {
    e.preventDefault();
    const { passGardenToEdit, garden } = this.props;
    passGardenToEdit(garden.id);
  }

  gardenDetailView = (e) => {
    e.preventDefault();
    const gardenId = this.props.garden.id;
    this.props.passGardenToDetails(gardenId);
  }

  render() {
    const { garden } = this.props;
    return (
      <div className='gardensPageContainer'>
        <ul className='your-gardens row'>
          <ul className='container row'>
            <span className='card-body gardenCard' id={garden.id}>
              <p className='garden-name'><b>{garden.name}</b></p>
              <p className='garden-description'><i>{garden.description}</i></p>
            </span>
          </ul>
          <span className='gardenButtons'>
            <span className='delete-button btn-btn'>
              <i className="far fa-minus-square fa-2x" onClick={this.deleteGardenEvent}></i>
            </span>
            <span className='edit-button btn-btn'>
              <i className="fas fa-pen-square fa-2x" onClick={this.editGardenEvent}></i>
            </span>
            <span className='garden-detail btn-btn fa-2x' onClick={this.gardenDetailView}>
              <i className="fas fa-angle-double-right"></i>
            </span>
          </span>
        </ul>
      </div>
    );
  }
}

export default GardenItem;
