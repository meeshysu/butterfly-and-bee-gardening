import React from 'react';
import PropTypes from 'prop-types';
import plantShape from '../../../helpers/propz/plantShape';
import PlantItem from '../../PlantItem/PlantItem';
import smashRequests from '../../../helpers/data/smashRequests';
// import PlantList from '../../PlantList/PlantList';
import './AddPlants.scss';
// import myPlantsRequest from '../../../helpers/data/myPlantRequest';

class AddPlants extends React.Component {
  state = {
    plants: [],
    gardenId: '',
  }

  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
    passPlantsToAddPlants: PropTypes.func,
  }

  getMyPlantsPlants() {
    const gardenId = this.props.match.params.id;
    smashRequests.getPlantsWithMyPlants(gardenId)
      .then((plants) => {
        this.setState({ plants, gardenId });
      })
      .catch(err => console.error('error with componentDidMount in plants', err));
  }

  componentDidMount() {
    this.getMyPlantsPlants();
  }

  updatePlantState = () => {
    this.getMyPlantsPlants();
  }

  render() {
    const {
      plants,
      gardenId,
    } = this.state;

    const plantItemComponent = plants && plants.map(plant => (
      <PlantItem
        plant={plant}
        key={plant.id}
        updatePlantState={this.updatePlantState}
        gardenId={gardenId}
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
