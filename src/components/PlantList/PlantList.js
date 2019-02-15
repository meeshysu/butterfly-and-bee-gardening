import React from 'react';
import PropTypes from 'prop-types';
import PlantItem from '../PlantItem/PlantItem';
import plantShape from '../../helpers/propz/plantShape';
import './PlantList.scss';

class PlantList extends React.Component {
  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
    gardenId: PropTypes.string,
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
        <li>{plantItemComponent}</li>
      </span>
    );
  }
}

export default PlantList;
