import React from 'react';
import PropTypes from 'prop-types';
import butterflySideFrame from '../../images/ButterflyFrameRedone.png';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(err => console.error('error with authenticateUser', err));
  }

  render() {
    return (
      <div className="Auth">
        <h3>Why Butterflies and Bees?</h3>
        <div className='about-container'>
          <img src={butterflySideFrame} alt='frame' className='butterfly-image-div'></img>
          <div className='outer-container'>
            <div className='inner-container'>
              <div className='about-scroll'>
                Specific gardening has become a popular venture in the past few years. Due to the lack of our population in honey bees and Monarchs, most avid and naive gardeners have taken on the challenege to help out. Discovery Schools and other education sources have asked for donations of flower seeds that will feed these fuzzy and delicate friends. As a horticulturist myself, who had the pleasure of working in the field for several years, I was able to encounter the everyday gardener that wanted to do their part. And as the years have gone forth, I have noticed the decline of bees and butterflies myself. This past spring and summer of 2018 was perhaps one of the least active seasons I have seen in quite a while. My own population of Eastern Black Swallowtail butterflies and Monarchs were drastically low. My lavendar is always buzzing away with Bumble and Honey bees; though, it was lack luster and almost vacant. A large concern was the unknown Monarch disease that was killing the Monarch during it's chyrisalis(sp) stage. Most entymologist were unsure of it's causes and considering our friendly orange and black dotted little guys are on the verge of extinction... I have had my share of losses and to be honest, I'm quite sick of losing my many legged and winged buddies. It was more than enough of a push to do a page dedicated to them.

                Another large factor and concern was the mosquito outbreak that caused pest management companies and local governments to spray nonselective pesticides to get rid of the disease concern. This reduced the population of a lot of major species of butterflies and bees. So what happens when these guys are gone? What do you think about hand painting pollen on a plant's female stigma from the male's anther? It's to get food, of course, because the natural pollinators that we have are all dead. Sounds good right? One of the main reasons we have squash are due to bees, for instance. Wonder why your squash plant wasn't producing? Yep. That's one of the main reasons.
            </div>
            </div>
          </div>
        </div>
        <button className="btn btn-info" onClick={this.authenticateUser}>Login To View Plants & Create A Garden</button>
      </div>
    );
  }
}

export default Auth;
