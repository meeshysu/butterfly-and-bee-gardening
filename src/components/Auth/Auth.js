import React from 'react';
import PropTypes from 'prop-types';
import header from '../../images/Header.png';
import aboutBees from '../../images/AboutBees.png';
import aboutButterflies from '../../images/AboutButterflies.png';
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
      <div className="Auth row">
          <img src={header} alt='frame' className='header-div justify-content-start'></img>
        <div className='about-container d-flex justify-content-start mx-2'>
          <div className='outer-container'>
            <div className='inner-container'>
              <div className='about-scroll mx-2'>
                Specific gardening has become a popular venture in the past few years. Due to the lack of our population in honey bees and Monarchs, most avid and naive gardeners have taken on the challenege to help out. Discovery Schools and other education sources have asked for donations of flower seeds that will feed these fuzzy and delicate friends. As a horticulturist myself, who had the pleasure of working in the field for several years, I was able to encounter the everyday gardener that wanted to do their part. And as the years have gone forth, I have noticed the decline of bees and butterflies myself. This past spring and summer of 2018 was perhaps one of the least active seasons I have seen in quite a while. My own population of Eastern Black Swallowtail butterflies and Monarchs were drastically low. My lavendar is always buzzing away with Bumble and Honey bees; though, it was lack luster and almost vacant. A large concern was the unknown Monarch disease that was killing the Monarch during it's chyrisalis(sp) stage. Most entymologist were unsure of it's causes and considering our friendly orange and black dotted little guys are on the verge of extinction... I have had my share of losses and to be honest, I'm quite sick of losing my many legged and winged buddies. It was more than enough of a push to do a page dedicated to them.

                Another large factor and concern was the mosquito outbreak that caused pest management companies and local governments to spray nonselective pesticides to get rid of the disease concern. This reduced the population of a lot of major species of butterflies and bees. So what happens when these guys are gone? What do you think about hand painting pollen on a plant's female stigma from the male's anther? It's to get food, of course, because the natural pollinators that we have are all dead. Sounds good right? One of the main reasons we have squash are due to bees, for instance. Wonder why your squash plant wasn't producing? Yep. That's one of the main reasons.
            </div>
            </div>
          </div>
        </div>
        <ul className='about-bee-header'>
        <img src={aboutBees} alt='frame' className='aboutBees-div justify-content-start'></img>
        </ul>
        <div className='about-bee-container d-flex justify-content-start mx-2'>
          <div className='outer-bee-container'>
            <div className='inner-bee-container'>
              <div className='about-bee-scroll mx-2'>
                Bees are an important part of our life, our world. If it wasn't for these buzzing creatures, our food chain would be quite different than what we see today. Alot of people take bees for granted or don't even care about them. The fear of being stung causes many to straight out kill them or flee from them. They don't approach and admire the insect, they prefer to acknolwedge that it's dangerous and to ignore it. All bees are defensive and not aggressive (like wasps and hornets are). They will only feel pressured to attack if you give them reason to do so, like many other wild animals in nature. If you're not swatting at them with a tennis racket or a shoe, they won't feel inclined to defend themselves. Your presence is not enough for them to feel the need to come at you. In fact, Carpenter bees, the ones that resemble Bumbles and have white dots on their heads, do not sting. They will buzz around you happily as they harvest food. Though, they can be a nuisance when they're drilling into your front porch. Also, most Bumblebees that you see flying around are males. Females do not do the majority of the work, since they're kept for creating new generations. They are the only ones with stingers and the capability of doing harm if they have to -- again if they have to.

                Bees are fascinating creatures. Honey bees can travel up to 3 miles away from their hives. It's important for us to plant flowers for them in our gardens, too. Just because we don't have hives, doesn't mean that we can't help out.
            </div>
            </div>
          </div>
        </div>
        <ul className='about-butter-header'>
        <img src={aboutButterflies} alt='frame' className='aboutButterflies-div justify-content-start'></img>
        </ul>
        <div className='about-butter-container d-flex justify-content-start mx-2'>
          <div className='outer-butter-container'>
            <div className='inner-butter-container'>
              <div className='about-butter-scroll mx-2'>
              Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .Lorem ipsum dolar sit amet accusantium iste quae eaque ipsa sit magni aspernatur accusantium doloremque veritatis ab ipsam ipsam, rem nemo inventore nemo quia ipsam aut rem quia sed dicta aspernatur .
            </div>
            </div>
          </div>
        </div>
        <ul className='d-flex align-self-end'>
        <button className="btn btn-info mx-2 d-flex justify-content-end" onClick={this.authenticateUser}>Login To View Plants & Create A Garden</button>
        </ul>
      </div>
    );
  }
}

export default Auth;
