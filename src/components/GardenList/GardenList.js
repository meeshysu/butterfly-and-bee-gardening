import React from 'react';
import PropTypes from 'prop-types';
import './GardenList.scss';
import gardenShape from '../../helpers/propz/gardenShape';
import GardenItem from '../GardenItem/GardenItem';

class GardenList extends React.Component {
  static propTypes = {
    gardens: PropTypes.arrayOf(gardenShape),
    deleteSingleGarden: PropTypes.func,
  }

  render() {
    const {
      gardens,
      deleteSingleGarden,
    } = this.props;

    const gardenItemComponent = gardens && gardens.map(garden => (
      <GardenItem
        garden={garden}
        deleteSingleGarden={deleteSingleGarden}
        key={garden.id}
      />
    ));

    return (
      <span className='col'>
        <h2>Gardens</h2>
        <p>{gardenItemComponent}</p>
      </span>
    );
  }
}

export default GardenList;
