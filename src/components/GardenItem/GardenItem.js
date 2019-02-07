import React from 'react';
import PropTypes from 'prop-types';
// import gardenRequest from '../../helpers/data/gardenRequest';
import gardenShape from '../../helpers/propz/gardenShape';
// import authRequests from '../../helpers/data/authRequests';
import './GardenItem.scss';

class GardenItem extends React.Component {
  static propTypes = {
    garden: gardenShape,
    deleteSingleGarden: PropTypes.func,
    passGardenToEdit: PropTypes.func,
    passGardenToDetails: PropTypes.func,
  }

  deleteGardenEvent = (e) => {
    e.preventDefault();
    const { deleteSingleGarden, garden } = this.props;
    deleteSingleGarden(garden.id);
  }

  // deleteMyPlants = (e) => {
  //   e.preventDefault();
  //   const { deleteMyPlantsForGarden, garden } = this.props;
  // }

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
          <ul className='row'>
            <ul className='container row'>
              <span className='card-body gardenCard' id={garden.id}>
                <p className='garden-name'>{garden.name}</p>
                <p className='garden-description'>{garden.description}</p>
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
