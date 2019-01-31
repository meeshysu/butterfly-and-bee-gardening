import React from 'react';
import PropTypes from 'prop-types';
// import SearchField from 'react-search-field';
import PlantItem from '../PlantItem/PlantItem';
import plantShape from '../../helpers/propz/plantShape';
import './PlantList.scss';

class PlantList extends React.Component {
  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
    gardenId: PropTypes.string,
  }

  // onChange = (value, e) => {
  //   const { plants } = this.state;
  //   filteredPlants = [],
  //     e.preventDefault();
  //   if (!value) {
  //     this.setState({ filteredPlants: plants });
  //   } else {
  //     plants.forEach((plant) => {
  //       if (plant.name.toLowerCase().includes(value.toLowerCase())
  //         || plant.size.toLowerCase().includes(value.toLowerCase())
  //         || plant.sun.toLowerCase().includes(value.toLowerCase())
  //       ))};
  // }

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
        {/* <SearchField
          placeholder="Search..."
          onChange={this.onChange}
          searchText="This is initial search text"
          classNames="test-class"
        /> */}
        <li>{plantItemComponent}</li>
      </span>
    );
  }
}

export default PlantList;
