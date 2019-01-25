import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../helpers/propz/plantShape';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.scss';

class PlantList extends React.Component {
  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
  }

  render() {
    const {
      plants,
    } = this.props;

    const plantItemComponent = plants && plants.map(plant => (
      <PlantItem
        plant={plant}
        key={plant.id}
      />
    ));

    return (
      <span className='col'>
        <h2>Plants</h2>
        <p>{plantItemComponent}</p>
      </span>
    );
  }
}

export default PlantList;