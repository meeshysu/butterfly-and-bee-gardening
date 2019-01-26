import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class GardenForm extends React.Component {
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
