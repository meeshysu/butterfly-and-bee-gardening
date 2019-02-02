import React from 'react';
import plantRequest from '../../../helpers/data/plantRequest';
// import myPlantsRequests from '../../../helpers/data/myPlantsRequests';
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
      })
      .catch(err => console.error('error with componentDidMount in plants', err));
  }

  // goodbyeMyPlants = (myPlantId) => {
  //   myPlantsRequests.deleteMyPlant(myPlantId)
  //     // .then(() => {
  //     //   myPlantsRequests.getMyPlantsByGardenId()
  //     //     .then((myPlants) => {
  //     //       this.setState({ myPlants });
  //     //     });
  //     // })
  //     .catch(err => console.error('error with goodbyeMyPlants', err));
  // }

  render() {
    const { plants } = this.state;
    return (
      <div className='plantsPage mx-auto'>
        <PlantList plants={plants}
        goodbyeMyPlants={this.goodbyeMyPlants} />
      </div>
    );
  }
}

export default Plants;
