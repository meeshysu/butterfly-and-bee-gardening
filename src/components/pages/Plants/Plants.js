import React from 'react';
import plantRequest from '../../../helpers/data/plantRequest';
import SearchField from 'react-search-field';
import PlantList from '../../PlantList/PlantList';
import './Plants.scss';


class Plants extends React.Component {
  state = {
    plants: [],
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
    console.log(value);
    const { plants } = this.state;
    const filteredPlants = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredPlants: plants });
    } else {
      plants.forEach((plant) => {
        if (plant.name.toLowerCase().includes(value.toLowerCase()) || plant.color.toLowerCase().includes(value.toLowerCase())) {
          filteredPlants.push(plants);
        }
        console.log(filteredPlants);
        this.setState({ filteredPlants });
      });
    }
  }

  render() {
    const { plants, filteredPlants } = this.state;
    return (
      <div className='plantsPage mx-auto'>
        <SearchField
          placeholder="Search Beans..."
          onChange={this.onChange}
          searchText=""
          classNames="test-class w-100"
        />
        <PlantList plants={plants}
          goodbyeMyPlants={this.goodbyeMyPlants}
          filteredPlants={filteredPlants} />
      </div>
    );
  }
}

export default Plants;
