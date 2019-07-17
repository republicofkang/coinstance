import React from 'react';
import welcomeimg from '../assets/img/welcome-img.png';

const LandingPage = props => {
  return (
    <div className="welcome-area wow fadeInUp" id="home">
      <div id="particles-js" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-center">
            <div className="welcome-right">
              <div className="welcome-text">
                <h1>
                  Introducing Coinstance: A New Crypto Token That Runs on
                  Ethereum Blockchain{' '}
                </h1>
                <h4>
                  Now you could trade Coinstance, our native crypton token right
                  here in our exchange.
                </h4>
              </div>
              <div className="welcome-btn">
                <a href="/trade" className="gradient-btn v2 mr-20">
                  Trade Coinstance
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="welcome-img">
              <img src={welcomeimg} alt="background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
