import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SearchField from 'react-search-field';
import plantShape from '../../../helpers/propz/plantShape';
import PlantItem from '../../PlantItem/PlantItem';
import smashRequests from '../../../helpers/data/smashRequests';
import myPlantsRequests from '../../../helpers/data/myPlantsRequests';
import AddPlantsHeader from '../../../images/AddPlantsHeader.png';
import './AddPlants.scss';

class AddPlants extends React.Component {
  state = {
    plants: [],
    filteredPlants: [],
    gardenId: '',
  }

  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
    passPlantsToAddPlants: PropTypes.func,
  }

  getMyPlantsPlants() {
    const gardenId = this.props.match.params.id;
    const { filteredPlants } = this.state;
    smashRequests.getPlantsWithMyPlants(gardenId)
      .then((plantz) => {
        let newFilteredPlants = [];
        if (filteredPlants.length > 0) {
          const filteredPlantsIds = filteredPlants.map(x => x.id);
          const fPlants = plantz.filter(p => filteredPlantsIds.includes(p.id));
          newFilteredPlants = fPlants;
        } else {
          newFilteredPlants = plantz;
        }

        this.setState({ plants: plantz, filteredPlants: newFilteredPlants, gardenId });
      })
      .catch(err => console.error('error with componentDidMount in plants', err));
  }

  componentDidMount() {
    this.getMyPlantsPlants();
  }

  onChange = (value, e) => {
    const { plants } = this.state;
    const filteredPlants = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredPlants: plants });
    } else {
      plants.forEach((plant) => {
        if (plant.name.toLowerCase().includes(value.toLowerCase())
          || plant.color.toLowerCase().includes(value.toLowerCase())
          || plant.sun.toLowerCase().includes(value.toLowerCase())
          || plant.size.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredPlants.push(plant);
        }
        this.setState({ filteredPlants });
      });
    }
  }

  updatePlantState = (action, myPlantId, newPlant) => {
    if (action === 'delete') {
      myPlantsRequests.deleteMyPlant(myPlantId)
        .then(() => {
          this.getMyPlantsPlants();
        })
        .catch(err => console.error('error with goodbyeMyPlants', err));
    } else {
      myPlantsRequests.myPlantPost(newPlant)
        .then(() => {
          this.getMyPlantsPlants();
        })
        .catch(error => console.error(error));
    }
  }

  render() {
    const {
      gardenId,
      filteredPlants,
    } = this.state;

    const plantItemComponent = filteredPlants.map(plant => (
      <PlantItem
        plant={plant}
        key={plant.id}
        updatePlantState={this.updatePlantState}
        gardenId={gardenId}
      />
    ));

    return (
      <div className="addPlantsToGardenPage mx-auto">
        <img src={AddPlantsHeader} alt='add-plants-header' className='addPlants-div'></img>
        <SearchField
          placeholder="Search Plants..."
          onChange={this.onChange}
          searchText=""
          classNames="test-class w-50 m-4"
        />
        <Button className='btn btn backToGarden m-2' onClick={this.props.history.goBack}>Back To Garden</Button>
        <li>{plantItemComponent}</li>
      </div>
    );
  }
}
export default withRouter(AddPlants);
