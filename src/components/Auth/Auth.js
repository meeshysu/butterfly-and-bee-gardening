import React from 'react';
import PropTypes from 'prop-types';
import header from '../../images/Header.png';
import BlackSwallowtailYellow from '../../images/BlackSwallowtailYellow.png';
import BlackSwallowtail from '../../images/BlackSwallowtail.png';
import WhyInvolved from '../../images/WhyInvolved.png';
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
      <div className="Auth row m-0">
        <img src={header} alt='header' className='header-div justify-content-start'></img>
        <div className='about-container'>
          <img src={WhyInvolved} alt='why' className='why-involved mx-auto'></img>
          <div className='about-descrip col-6 m-auto'>
            Specific gardening has become a popular venture in the past few years. Due to the lack of our population in honey bees and Monarchs, most avid and naive gardeners have taken on the challenege to help out. Discovery Schools and other education sources have asked for donations of flower seeds that will feed these fuzzy and delicate friends. As a horticulturist myself, who had the pleasure of working in the field for several years, I was able to encounter the everyday gardener that wanted to do their part. And as the years have gone forth, I have noticed the decline of bees and butterflies. This past spring and summer of 2018 was perhaps one of the least active seasons I have seen in quite a while. My own population of Eastern Black Swallowtail butterflies and Monarchs were drastically low. My lavender is always buzzing away with bumble and honey bees; though, it was lack luster and almost vacant. A large concern was the unknown Monarch disease that was killing the Monarch while it was attempting to change into a chrysalis. Most entymologists were unsure of it's causes and considering our friendly orange and black dotted little guys are on the verge of extinction... I have had my share of losses and to be honest, I'm quite sick of losing my many legged and winged buddies. It was more than enough of a push to do a page dedicated to them.

            Another large factor and concern was the mosquito outbreak that caused pest management companies and local governments to spray nonselective pesticides to get rid of the disease concern. This reduced the population of a lot of major species of butterflies and bees up to 81%. This page is meant for YOU. Go forth and create a garden, search through the plants that I have posted and go seek out your town's nursery.
            <br />
            <br />
            Plant care is just as important as the butterflies and bees themselves. In order to make sure that your garden survives, take the time to understand what your plant needs. Over watering and under watering are one of the biggest plant killers when they're under our care. Make sure that your plant needs water before giving it some - put your finger in up to an inch of the soil and determine based off the moist texture, or lack there of. Root rot tricks us, resembling the droop leaves have when they need water. Instead, the roots are browning and dying from too much. As well, make sure to water the plant under the leaves. This will help to prevent many diseases and molds, as well as making sure that your plants are well airated. Packing them too close together could be problematic down the road. Using a slow release fertilizer like Osmocote is also a benefit. You can plant your plants with Osmocote, but I would not suggest doing it with other fertilizers like miracle grow that could potentially burn your plant. Pruning dead blooms off of your plant will encourage further growth. It may be time consuming, but wroth it on many different kinds that rely on pruning. Sometimes planting is experimental. Over the years you will learn what plants need best and where they will do best. Ask your local nursery worker if you need help, or feel free to reach out onto many Gardening Forums.
            </div>
          <img src={BlackSwallowtailYellow} alt='yellowtail' className='yellow-tail'></img>
        </div>
        <ul className='about-bee-header'>
          <img src={aboutBees} alt='frame' className='aboutBees-div'></img>
        </ul>
      <div className='about-bee-container mr-auto'>
        <div className='about-bee-descrip col-6'>
          There are 4,000 different species of bees just in North America. Most of these bees are pollinators, which means they help plants reproduce by moving pollen to the female stigma. There are many plants that rely on bees and other pollinators to help in their reproduction, like squash, coffee, almonds and tomatoes. Could you imagine no pollination? The world would essentially starve with the lack of crops. Look at the chain of food -- we eat plants and meat, our meat eats plants, and our plants need insects for pollination. What happens when you cut out the plants?
          Sadly, 40% of our bee population has died last year alone. I personally noticed this myself, as my friendly buzzers were lacking in population when usually it looked like my lavender and butterfly bushes were moving. Obviously it's important for something to be done. One of those things is simplly UNDERSTANDING bees and the ridiculous fear of them. Most bumblebees that you see are males, and these males have NO stingers. No stinger? It means no stinging! This is the same with Carpenter bees. Yes they may be a nuisance, but if you put boxes up around your property for them to make a home in, they'll leave your porch alone. Also, again, they don't STING! Bees are defensive creatures, meaning they will not attack unless prompted to. This is like many other animals in nature. Truly they have no interest in us - they aren't looking at us as the next victim. Most of the time we are in their path of travel. That's when we panic, start swatting and then in return the bee begins to panic, thinking it's life is in danger. There is no reason for us to go outside and begin swatting them down with tennis rackets for fun. For more information on how to take care of bees and do your part, copy and paste this URL: http://www.newyorkbeesanctuary.org/blog/2016/3/3/10-ways-you-can-help-save-the-bees.
            </div>
      </div>
      <ul className='about-butter-header ml-auto p-2'>
        <img src={aboutButterflies} alt='frame' className='aboutButterflies-div'></img>
      </ul>
      <div className='about-butter-container'>
        <div className='about-butter-descrip col-6 ml-auto'>
          Just like bees, butterflies are just as important as far as pollination goes. With thousands of different species just in North America, it's important for them to pollinate and for us to protect them. Like Honey Bees, Monarchs are declining in population because of nonselective pesticides, diseases, and other unfortunate circumstances. Monarchs, unfortunately, are not the only ones that are experiencing decline. Again from my own personal experience with raising Eastern Black Swallowtail and Monarch butterflies, the population this last season was rather depressing. None of my Monarchs made it to their chyrisalis stage - dying whilst transforming - and broods were reduced in size for my Swallowtails. Those are not the only ones who are suffering from our ways of living. We become so eager to get rid of the bad bugs, we end up hurting the good ones too. So for us that want to encourage growth of a population, it's important for us to make gardens that will provide sanctuary, nectar and host plants. As well, it is important for us to be educated on butterflies, as well as educate others. Education means understanding which caterpillars are what, and not destroying them on our garden veggies or assuming 'everything is a pest'. Tomato horn and Tobacco hornworms are buttheads, of course, they eat all your tomato and tobacoo plants, but what they turn into is one of the most gorgeous and large moths I have seen. So instead of killing them, I give them a plant to host themselves on. The little white butterflies that you see flying around with a black dot are called Cabbage Whites, they of course, eat cabbage leaves. We squish them, throw them away, and but don't realize that the caterpillar we see grows into a beautiful and pollinating butterfly. And as much as I hate to think about it, the caterpillars are also food for amphibians and birds. Isn't it better to just let nature run it's course? If you want to learn more about butterflies,species, topics and raising them, copy and paste this URL: https://www.organicconsumers.org/campaigns/save-butterflies.
            </div>
      </div>
      <ul className='p-2 mx-auto col-10'>
        <button className="btn btn-secondary m-auto" onClick={this.authenticateUser}>Login With Google</button>
      </ul>
      <img src={BlackSwallowtail} alt='blacktail' className='black-tail ml-auto'></img>
      </div>
    );
  }
}

export default Auth;
