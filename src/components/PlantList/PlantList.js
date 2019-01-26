import React from 'react';
import PropTypes from 'prop-types';
import './PlantList.scss';
import PlantItem from '../PlantItem/PlantItem';
import plantShape from '../../helpers/propz/plantShape';

class PlantList extends React.Component {
  static propTypes = {
    plants: PropTypes.arrayOf(plantShape),
  }

  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
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
        <form className='mx-auto'>
          <input className='col'
            placeholder='Search for a plant or a trait...'
            onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
        </form>
        <p>{plantItemComponent}</p>
      </span>
    );
  }
}

export default PlantList;
