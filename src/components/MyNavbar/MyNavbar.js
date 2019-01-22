import React from 'react';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div className="my-navbar">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand">Butterfly & Bee Gardening</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <div className="nav-link">Home <span className="sr-only">(current)</span></div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Plants</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Gardens</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Logout</div>
      </li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default MyNavbar;
