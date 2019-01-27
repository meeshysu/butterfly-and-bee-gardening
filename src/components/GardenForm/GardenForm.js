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

  render() {
    const { newGarden } = this.state;
    return (
      <Form onSubmit={this.formSubmit}>
        <FormGroup>
          <Label for="example-garden">Garden Name</Label>
          <Input type="text" name="garden" id="example-garden" placeholder="Enter A Garden Name" value={newGarden.name} onChange={this.gardenNameChange} />
        </FormGroup>
        <FormGroup>
          <Label for="example-descrip">Garden Description</Label>
          <Input type="textarea" name="text" id="example-descrip" placeholder="What kind of garden will this be used for?" value={newGarden.description} onChange={this.gardenDescripChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default GardenForm;
