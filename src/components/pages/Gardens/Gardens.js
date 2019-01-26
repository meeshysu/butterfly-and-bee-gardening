import React from 'react';
import GardenForm from '../../GardenForm/GardenForm';
import GardenList from '../../GardenList/GardenList';
import gardenRequest from '../../../helpers/data/gardenRequest';
import './Gardens.scss';

class Gardens extends React.Component {
  state = {
    gardens: [],
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

  render() {
    const { gardens } = this.state;
    return (
      <div className='gardensPage mx-auto'>
        <GardenList gardens={gardens}
          deleteSingleGarden={this.deleteOneGarden}
        />
        <GardenForm />
      </div>
    );
  }
}

export default Gardens;
