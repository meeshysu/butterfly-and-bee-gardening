import React from 'react';
import connection from '../../../helpers/data/connection';
import plantRequest from '../../../helpers/data/plantRequest';
import './Plants.scss';


class Plants extends React.Component {
  state = {
    plants: [],
  }

  componentDidMount() {
    connection();
    plantRequest.getRequest()
      .then((plants) => {
        this.setState({ plants });
      })
      .catch(err => console.error('error with componentDidMount', err));
  }

  render() {
    return (
      <div className='plantsPage mx-auto'>
        <h3>Feast yo eyes on dese plants</h3>
      </div>
    );
  }
}

export default Plants;
