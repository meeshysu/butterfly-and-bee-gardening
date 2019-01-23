import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
}
  from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Butterfly and Bee Gardening</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/gardens/'>Gardens</NavLink>
            </NavItem>
              <NavItem>
                {isAuthed ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : ''}
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
