import React from 'react';
import GardenForm from '../../GardenForm/GardenForm';
import GardenList from '../../GardenList/GardenList';
import gardenRequest from '../../../helpers/data/gardenRequest';
import authRequests from '../../../helpers/data/authRequests';
import './Gardens.scss';

class Gardens extends React.Component {
  state = {
    gardens: [],
    isEditing: false,
    editId: '-1',
  }

  getGardens = () => {
    const uid = authRequests.getCurrentUid();
    gardenRequest.getGardenByUidRequest(uid)
      .then((gardens) => {
        this.setState({ gardens });
      })
      .catch(err => console.error('error with componentDidMount in gardens', err));
  }

  componentDidMount() {
    this.getGardens();
  }

  deleteOneGarden = (gardenId) => {
    gardenRequest.deleteGarden(gardenId)
      .then(() => {
        this.getGardens();
      })
      .catch((err) => {
        console.error('error with deleteOneGarden', err);
      });
  }

  formSubmitGardenEvent = (newGarden) => {
    const { isEditing, editId } = this.state;
    if (isEditing) {
      gardenRequest.putRequest(editId, newGarden)
        .then(() => {
          this.setState({ isEditing: false, editId: '-1' });
          this.getGardens();
        })
        .catch(err => console.error('error in formGardenSubmit', err));
    } else {
      gardenRequest.postRequest(newGarden)
        .then(() => {
          this.getGardens();
        })
        .catch(err => console.error('error on formGardenSubmit', err));
    }
  }

  passGardenToEdit = gardenId => this.setState({ isEditing: true, editId: gardenId });

  passGardenToDetails = gardenId => this.props.history.push(`/gardens/${gardenId}`);

  gardenDetailView = (gardenId) => {
    this.passGardenToDetails(gardenId);
  }

  render() {
    const {
      isEditing,
      editId,
    } = this.state;

    return (
      <div className='gardensPage mx-auto'>
        <GardenList
          gardens={this.state.gardens}
          deleteSingleGarden={this.deleteOneGarden}
          passGardenToEdit={this.passGardenToEdit}
          gardenDetailView={this.gardenDetailView}
          passGardenToDetails={this.passGardenToDetails}
        />
        <GardenForm
          isEditing={isEditing}
          editId={editId}
          passGardenToDetails={this.passGardenToDetails}
          onSubmit={this.formSubmitGardenEvent} />
      </div>
    );
  }
}

export default Gardens;
