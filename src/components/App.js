import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import LandingPage from './LandingPage';
import { connect } from 'react-redux';
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange
} from '../store/interactions';
import { contractsLoadedSelector } from '../store/selectors';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch);
    await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    await loadAccount(web3, dispatch);
    const token = await loadToken(web3, networkId, dispatch);
    if (!token) {
      window.alert(
        'Token smart contract not detected on the current network. Please select another network with Metamask.'
      );
      return;
    }
    const exchange = await loadExchange(web3, networkId, dispatch);
    if (!exchange) {
      window.alert(
        'Exchange smart contract not detected on the current network. Please select another network with Metamask.'
      );
      return;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          {this.props.contractsLoaded ? (
            <Route exact path="/trade" component={Content} />
          ) : (
            <div className="content" />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    contractsLoaded: contractsLoadedSelector(state)
  };
}

export default connect(mapStateToProps)(App);
