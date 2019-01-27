import React from 'react';
import GardenForm from '../../GardenForm/GardenForm';
import GardenList from '../../GardenList/GardenList';
import gardenRequest from '../../../helpers/data/gardenRequest';
import './Gardens.scss';

class Gardens extends React.Component {
  state = {
    gardens: [],
    isEditing: false,
    editId: '-1',
  }

  componentDidMount() {
    gardenRequest.getGardenRequest()
      .then((gardens) => {
        this.setState({ gardens });
      })
      .catch(err => console.error('error with componentDidMount in gardens', err));
  }

  deleteOneGarden = (gardenId) => {
    gardenRequest.deleteGarden(gardenId)
      .then(() => {
        gardenRequest.getGardenRequest()
          .then((gardens) => {
            this.setState({ gardens });
          });
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
        gardenRequest.getGardenRequest()
          .then((gardens) => {
            this.setState({ gardens, isEditing: false, editId: '-1' });
          });
      })
      .catch(err => console.error('error in formGardenSubmit', err));
    } else {
      gardenRequest.postRequest(newGarden)
      .then(() => {
        gardenRequest.getGardenRequest()
        .then((gardens) => {
          this.setState({ gardens });
        });
      })
      .catch(err => console.error('error on formGardenSubmit', err));
    }
  }

  passGardenToEdit = gardenId => this.setState({ isEditing: true, editId: gardenId });

  render() {
    const {
      gardens,
      isEditing,
      editId,
    } = this.state;

    return (
      <div className='gardensPage mx-auto'>
        <GardenList 
          gardens={this.state.gardens}
          deleteSingleGarden={this.deleteOneGarden}
          passGardenToEdit={this.passGardenToEdit}
        />
        <GardenForm 
        isEditing={isEditing} 
        editId={editId} 
        onSubmit={this.formSubmitGardenEvent} />
      </div>
    );
  }
}

export default Gardens;
