import React from 'react';
import SearchField from 'react-search-field';
import plantRequest from '../../../helpers/data/plantRequest';
import FindPlantsHeader from '../../../images/FindPlantsHeader2.png';
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
        this.setState({ filteredPlants });
      });
    }
  }

  render() {
    const { filteredPlants } = this.state;
    return (
      <div className='plantsPage mt-4'>
      <img src={FindPlantsHeader} alt='find' className='findPlants-div'></img>
        <SearchField
          placeholder="Search Plants..."
          onChange={this.onChange}
          searchText=""
          classNames="test-class w-50 mt-auto"
        />
        <PlantList plants={filteredPlants}
          goodbyeMyPlants={this.goodbyeMyPlants}
          filteredPlants={filteredPlants} />
      </div>
    );
  }
}

export default Plants;
