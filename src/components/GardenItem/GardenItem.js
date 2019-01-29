import React from 'react';
import PropTypes from 'prop-types';
// import gardenRequest from '../../helpers/data/gardenRequest';
import gardenShape from '../../helpers/propz/gardenShape';
import authRequests from '../../helpers/data/authRequests';
import './GardenItem.scss';


class GardenItem extends React.Component {
  static propTypes = {
    garden: gardenShape,
    deleteSingleGarden: PropTypes.func,
    passGardenToEdit: PropTypes.func,
  }

  deleteGardenEvent = (e) => {
    e.preventDefault();
    const { deleteSingleGarden, garden } = this.props;
    deleteSingleGarden(garden.id);
  }

  editGardenEvent = (e) => {
    e.preventDefault();
    const { passGardenToEdit, garden } = this.props;
    passGardenToEdit(garden.id);
  }

  gardenDetailView = (e) => {
    const uid = authRequests.getCurrentUid();
    const gardenId = e.target.uid;
    this.props.history.push(`/gardens/${gardenId}`);
  }

  render() {
    const { garden } = this.props;
    // const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      // if (garden.uid === uid) {
      return (
        <span className='col-2'>
            <span className='delete-button btn-btn'>
            <i className="far fa-minus-square" onClick={this.deleteGardenEvent}></i>
          </span>
          <span className='edit-button btn-btn'>
            <i className="fas fa-pen-square" onClick={this.editGardenEvent}></i>
          </span>
          <span className='garden-detail btn-btn' onClick={this.gardenDetailView}>
            <i className="fas fa-angle-double-right"></i>
          </span>
        </span>
      );
      // }
      // return <span className="col-2"></span>;
    };

    return (
      <li className='row'>
      {makeButtons()}
        <span className='card-body gardenCard' id={garden.id}>
          <p className='garden-name'>{garden.name}</p>
          <p className='garden-description'>{garden.description}</p>
        </span>
      </li>
    );
  }
}

export default GardenItem;
// onClick={this.editAGarden}
