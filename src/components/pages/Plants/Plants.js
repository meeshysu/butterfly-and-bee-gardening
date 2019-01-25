import React from 'react';
import plantRequest from '../../../helpers/data/plantRequest';
import PlantList from '../../PlantList/PlantList';
import './Plants.scss';


class Plants extends React.Component {
  state = {
    plants: [],
  }

  componentDidMount() {
    plantRequest.getRequest()
      .then((plants) => {
        this.setState({ plants });
      })
      .catch(err => console.error('error with componentDidMount', err));
  }

  render() {
    return (
      <div className='plantsPage mx-auto'>
        <PlantList />
      </div>
    );
  }
}

export default Plants;
