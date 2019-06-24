import React from 'react';
import welcomeimg from '../assets/img/welcome-img.png';

const LandingPage = props => {
  return (
    <div class="welcome-area wow fadeInUp" id="home">
      <div id="particles-js" />
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 align-self-center">
            <div class="welcome-right">
              <div class="welcome-text">
                <h1>
                  Introducing Coinstance: A New Crypto Token That Runs on
                  Ethereum Blockchain{' '}
                </h1>
                <h4>
                  Now you could trade Coinstance, our native crypton token right
                  here in our exchange.
                </h4>
              </div>
              <div class="welcome-btn">
                <a href="/trade" class="gradient-btn v2 mr-20">
                  Trade Coinstance
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="welcome-img">
              <img src={welcomeimg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
