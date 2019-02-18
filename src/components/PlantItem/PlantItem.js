import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import plantShape from '../../helpers/propz/plantShape';
import Sun from '../../images/Icons/Sun.png';
import Shade from '../../images/Icons/Shade.png';
import PartSun from '../../images/Icons/PartSun.png';
import Blue from '../../images/Colors/Blue.png';
import Red from '../../images/Colors/Red.png';
import White from '../../images/Colors/White.png';
import Yellow from '../../images/Colors/Yellow.png';
import Purple from '../../images/Colors/Purple.png';
import Pink from '../../images/Colors/Pink.png';
import Orange from '../../images/Colors/Orange.png';
import Lavender from '../../images/Colors/Lavender.png';
import LightPink from '../../images/Colors/LightPink.png';
import One from '../../images/Icons/1.png';
import Two from '../../images/Icons/2.png';
import Four from '../../images/Icons/4.png';
import Five from '../../images/Icons/5.png';
import Six from '../../images/Icons/6.png';


import './PlantItem.scss';

const defaultValue = {
  gardenId: '',
  plantId: '',
};

class PlantItem extends React.Component {
  static propTypes = {
    plant: plantShape,
    updatePlantState: PropTypes.func,
    gardenId: PropTypes.string,
  }

  state = {
    plantObject: defaultValue,
  }

  goodbyeMyPlants = () => {
    const { plant, updatePlantState } = this.props;
    updatePlantState('delete', plant.myPlantId, {});
  }

  helloMyPlants = () => {
    const plantObject = { ...this.state.plantObject };
    const { plant, updatePlantState, gardenId } = this.props;
    plantObject.plantId = plant.id;
    plantObject.gardenId = gardenId;
    updatePlantState('create', 'none', plantObject);
  }

  render() {
    const { plant } = this.props;
    const makeButton = () => {
      if (plant.myPlantId === 'sal') {
        return (
          <Button className='btn btn-info' onClick={this.helloMyPlants}>add me</Button>
        );
      }
      if (plant.myPlantId !== 'sal' && plant.myPlantId) {
        return (
          <Button className='btn btn-info' onClick={this.goodbyeMyPlants}>unselect me</Button>
        );
      }
      return '';
    };
    const sunIcons = () => {
      if (plant.sun === 'Full Sun') {
        return (
          <img src={Sun} alt='full-sun' className='fullSun-icon'></img>
        );
      }
      if (plant.sun === 'Part Sun') {
        return (
          <img src={PartSun} alt='part-sun' className='partSun-icon'></img>
        );
      }
      if (plant.sun === 'Shade') {
        return (
          <img src={Shade} alt='shade' className='shade-icon'></img>
        );
      }
      return '';
    };
    const sizeIcons = () => {
      if (plant.icon === '1') {
        return (
          <img src={One} alt='One' className='One-icon'></img>
        );
      }
      if (plant.icon === '2') {
        return (
          <img src={Two} alt='Two' className='Two-icon'></img>
        );
      }
      if (plant.icon === '4') {
        return (
          <img src={Four} alt='Four' className='Four-icon'></img>
        );
      }
      if (plant.icon === '5') {
        return (
          <img src={Five} alt='Five' className='Five-icon'></img>
        );
      }
      if (plant.icon === '6') {
        return (
          <img src={Six} alt='Six' className='Six-icon'></img>
        );
      }
      return '';
    };
    const colors = () => {
      if (plant.color === 'Orange') {
        return (
          <img src={Orange} alt='Orange' className='Orange-icon'></img>
        );
      }
      if (plant.color === 'Red') {
        return (
          <img src={Red} alt='Red' className='Red-icon'></img>
        );
      }
      if (plant.color === 'Pink') {
        return (
          <img src={Pink} alt='Pink' className='Pink-icon'></img>
        );
      }
      if (plant.color === 'Light Pink') {
        return (
          <img src={LightPink} alt='LightPink' className='LightPink-icon'></img>
        );
      }
      if (plant.color === 'Purple') {
        return (
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
        );
      }
      if (plant.color === 'White') {
        return (
          <img src={White} alt='White' className='White-icon'></img>
        );
      }
      if (plant.color === 'Yellow') {
        return (
          <img src={Yellow} alt='Yellow' className='Yellow-icon'></img>
        );
      }
      if (plant.color === 'Blue') {
        return (
          <img src={Blue} alt='Blue' className='Blue-icon'></img>
        );
      }
      if (plant.color === 'Purple, Pink, Red, Orange, White') {
        return (
          <ul>
          <img src={White} alt='White' className='White-icon'></img>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Orange} alt='Orange' className='Orange-icon'></img>
          <img src={Pink} alt='Pink' className='Pink-icon'></img>
          <img src={Red} alt='Red' className='Red-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'All') {
        return (
          <ul>
          <img src={White} alt='White' className='White-icon'></img>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Orange} alt='Orange' className='Orange-icon'></img>
          <img src={Pink} alt='Pink' className='Pink-icon'></img>
          <img src={Red} alt='Red' className='Red-icon'></img>
          <img src={Yellow} alt='Yellow' className='Yellow-icon'></img>
          <img src={Blue} alt='Blue' className='Blue-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Purple, Blue') {
        return (
          <ul>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Blue} alt='Blue' className='Blue-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Purple, Blue, White') {
        return (
          <ul>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Blue} alt='Blue' className='Blue-icon'></img>
          <img src={White} alt='White' className='White-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Blue, Pink, Purple, White') {
        return (
          <ul>
          <img src={White} alt='White' className='White-icon'></img>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Pink} alt='Pink' className='Pink-icon'></img>
          <img src={Blue} alt='Blue' className='Blue-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Purple, Orange, Red, Pink') {
        return (
          <ul>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Orange} alt='Orange' className='Orange-icon'></img>
          <img src={Pink} alt='Pink' className='Pink-icon'></img>
          <img src={Red} alt='Red' className='Red-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Red, Yellow, Orange') {
        return (
          <ul>
          <img src={Orange} alt='Orange' className='Orange-icon'></img>
          <img src={Red} alt='Red' className='Red-icon'></img>
          <img src={Yellow} alt='Yellow' className='Yellow-icon'></img>
          </ul>
        );
      }
      if (plant.color === 'Lavender, Purple') {
        return (
          <ul>
          <img src={Purple} alt='Purple' className='Purple-icon'></img>
          <img src={Lavender} alt='Lavender' className='Lavender-icon'></img>
          </ul>
        );
      }
      return '';
    };
    return (
      <div className="card-group">
        <ul className="card">
          <img className='plant-image' src={plant.image} alt='plant' />
        <ul className='card-body'>
          {makeButton()}
          <li className='plant-name'>{plant.name}</li>
          <li className='plant-size'><i>{plant.scientificName}</i></li>
          {/* <li className='plant-size'>{plant.size}</li> */}
          <li className='plant-size'>{plant.life}</li>
          <li className='plant-icon'>{sizeIcons()}</li>
          <li className='plant-sun'>{sunIcons()}</li>
          <li className='plant-color'>{colors()}</li>
          <li className='plant-description'>{plant.description}</li>
        </ul>
      </ul>
      </div>
    );
  }
}

export default PlantItem;
