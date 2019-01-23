import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import './App.scss';


class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  };


  render() {
    const { authed } = this.state;
    const logoutClickEvent = () => {
      console.log('yassssss', logoutClickEvent);
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      );
    }

    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
      </div>
    );
  }
}

export default App;
