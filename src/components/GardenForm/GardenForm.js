import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';


const defaultGarden = {
  uid: '',
  name: '',
  description: '',
};

class GardenForm extends React.Component {
  static propTypes = {
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="garden-name">New Garden</Label>
          <Input type="text" name="garden" id="garden-name" placeholder="Enter A Garden Name" />
        </FormGroup>
        <FormGroup>
          <Label for="garden-description">Garden Description</Label>
          <Input type="textarea" name="text" id="garden-description" placeholder="What kind of garden will this be used for?" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default GardenForm;
