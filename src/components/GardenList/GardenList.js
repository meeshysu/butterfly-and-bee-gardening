import React from 'react';
import PropTypes from 'prop-types';
import './GardenList.scss';
import gardenShape from '../../helpers/propz/gardenShape';
import GardenItem from '../GardenItem/GardenItem';

class GardenList extends React.Component {
  static propTypes = {
    gardens: PropTypes.arrayOf(gardenShape),
    deleteSingleGarden: PropTypes.func,
    passGardenToEdit: PropTypes.func,
  }

  render() {
    const {
      gardens,
      deleteSingleGarden,
      passGardenToEdit,
    } = this.props;

    const gardenItemComponent = gardens && gardens.map(garden => (
      <GardenItem
        garden={garden}
        key={garden.id}
        deleteSingleGarden={deleteSingleGarden}
        passGardenToEdit={passGardenToEdit}
      />
    ));

    return (
      <span className='col'>
        <h2>Gardens</h2>
        <ul>{gardenItemComponent}</ul>
      </span>
    );
  }
}

export default GardenList;
