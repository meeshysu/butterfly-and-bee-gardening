import React from 'react';
import plantShape from '../../helpers/propz/plantShape';
import './PlantList.scss';

class PlantList extends React.Component {
  static propTypes = {
    plants: plantShape.plantShape,
  }

  render() {
    const {
      plants,
    } = this.props;
    const plantItemComponent = plants.map(plant => (
      <PlantList
        plant={plant}
        key={plant.id}
      />
    ));

    return (
      <div className='plants row' >
        <h2>Plants</h2>
        <p>{plantItemComponent}</p>
      </div>
    );
  }
}

export default PlantList;
