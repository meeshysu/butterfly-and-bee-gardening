import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../../helpers/propz/plantShape';
import PlantItem from '../../PlantItem/PlantItem';
import plantRequest from '../../../helpers/data/plantRequest';
// import PlantList from '../../PlantList/PlantList';
import './AddPlants.scss';

class AddPlants extends React.Component {
  state = {
    plants: [],
  }

  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
    passPlantsToAddPlants: PropTypes.func,
  }

  componentDidMount() {
    plantRequest.getPlantRequest()
      .then((plants) => {
        this.setState({ plants });
      })
      .catch(err => console.error('error with componentDidMount in plants', err));
  }

  render() {
    const {
      plants,
    } = this.state;

    const plantItemComponent = plants && plants.map(plant => (
      <PlantItem
        plant={plant}
        key={plant.id}
      />
    ));

    return (
      <div className="addPlantsToGardenPage mx-auto">
        <h3>Add Your Plant Here</h3>
        <li>{plantItemComponent}</li>
      </div>
    );
  }
}
export default AddPlants;
