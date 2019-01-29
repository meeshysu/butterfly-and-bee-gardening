import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Gardens from '../components/pages/Gardens/Gardens';
import Plants from '../components/pages/Plants/Plants';
import GardenDetails from '../components/pages/GardenDetails/GardenDetails';
import './App.scss';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (< Redirect to={{ pathname: '/plants', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (< Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
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
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
            <div className='container'>
              <div className='row'>
                <Switch>
                  <Route path='/plants' component={Plants} />
                  <PrivateRoute path='/gardens' component={Gardens} authed={this.state.authed} />
                  <PrivateRoute path='/gardens/:id' component={GardenDetails} authed={this.state.authed} />
                  <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
