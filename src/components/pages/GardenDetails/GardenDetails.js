import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import PlantList from '../../PlantList/PlantList';
import gardenRequests from '../../../helpers/data/gardenRequest';
import smashRequests from '../../../helpers/data/smashRequests';

class GardenDetails extends React.Component {
  state = {
    garden: {},
    myPlants: [],
  }

  componentDidMount() {
    const gardenId = this.props.match.params.id;
    gardenRequests.getSingleGarden(gardenId)
      .then((garden) => {
        this.setState({ garden: garden.data, gardenId });
      })
      .catch((err) => {
        console.error('err in getGardenById', err);
      });

    smashRequests.getPlantsForGarden(gardenId)
      .then((myPlants) => {
        this.setState({ myPlants });
      })
      .catch((err) => {
        console.error('err in getPlantsForGarden', err);
      });
  }

  passMyPlantsToGarden = (e) => {
    const gardenId = this.props.match.params.id;
    this.props.history.push(`/gardens/${gardenId}/addPlants`);
  }

  render() {
    const { garden, myPlants } = this.state;
    return (
      <div className='gardenPlantsForDetails mx-auto'>

        <h3>{garden.name}</h3>
        <Button className='btn btn addPlantButton' onClick={this.passMyPlantsToGarden}>Add A Plant</Button>
        <Button className='btn btn backToGarden m-2' onClick={this.props.history.goBack}>Back To Gardens</Button>
        <PlantList plants={myPlants}
        />
      </div>
    );
  }
}

export default withRouter(GardenDetails);
