import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import authRequests from '../../helpers/data/authRequests';
import gardenRequest from '../../helpers/data/gardenRequest';


const defaultGarden = {
  uid: '',
  name: '',
  description: '',
};

class GardenForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

  state = {
    newGarden: defaultGarden,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempGarden = { ...this.state.newGarden };
    tempGarden[name] = e.target.value;
    this.setState({ newGarden: tempGarden });
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempGarden = { ...this.state.newGarden };
    tempGarden[name] = e.target.value;
    this.setState({ newGarden: tempGarden });
  }

  gardenNameChange = e => this.formFieldStringState('name', e);

  gardenDescripChange = e => this.formFieldStringState('description', e)


  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myGarden = { ...this.state.newGarden };
    myGarden.uid = authRequests.getCurrentUid();
    onSubmit(myGarden);
    this.setState({ newGarden: defaultGarden });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      gardenRequest.getSingleGarden(editId)
        .then((garden) => {
          this.setState({ newGarden: garden.data });
        })
        .catch(err => console.error('error in componentDidUpdate', err));
    }
  }

  render() {
    const { newGarden } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Garden</h2>;
      }
      return <h2>Add New Garden</h2>;
    };
    return (
      <Form className='gardenForm' onSubmit={this.formSubmit}>
        {title()}
        <FormGroup>
          <Label for="example-garden">Garden Name</Label>
          <Input
            type="text"
            name="garden"
            id="example-garden"
            placeholder="Enter A Garden Name"
            value={newGarden.name}
            onChange={this.gardenNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="example-descrip">Garden Description</Label>
          <Input
            type="textarea"
            name="text"
            id="example-descrip"
            placeholder="What kind of garden will this be used for?"
            value={newGarden.description}
            onChange={this.gardenDescripChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default GardenForm;
