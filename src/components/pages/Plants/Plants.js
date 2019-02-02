import React from 'react';
import SearchField from 'react-search-field';
import plantRequest from '../../../helpers/data/plantRequest';
// import myPlantsRequests from '../../../helpers/data/myPlantsRequests';
import PlantList from '../../PlantList/PlantList';
import './Plants.scss';


class Plants extends React.Component {
  state = {
    plants: [],
    filteredPlants: [],
  }

  componentDidMount() {
    plantRequest.getPlantRequest()
      .then((plants) => {
        this.setState({ plants });
        this.setState({ filteredPlants: plants });
      })
      .catch(err => console.error('error with componentDidMount in plants', err));
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
        // console.log(filteredPlants);
        this.setState({ filteredPlants });
      });
    }
  }

  render() {
    const { filteredPlants } = this.state;
    return (
      <div className='plantsPage mx-auto'>
        <SearchField
          placeholder="Search Plants..."
          onChange={this.onChange}
          searchText=""
          classNames="test-class w-100"
        />
        <PlantList plants={filteredPlants}
          goodbyeMyPlants={this.goodbyeMyPlants}
          filteredPlants={filteredPlants} />
      </div>
    );
  }
}

export default Plants;
