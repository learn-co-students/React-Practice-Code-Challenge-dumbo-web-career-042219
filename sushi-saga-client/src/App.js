import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

//--------------------------CREATE STATES

  state = {
    sushiList: [],
    currentSushi: [],
    money: 100
  }

////----------FETCH SUSHI
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({sushiList: data})
      let sushis = [...this.state.sushiList]
      let four = sushis.slice(0,4)
      this.setState({currentSushi: four})
    })
  }

  handleEatSushi = (sushiObj) => {
    let allSushi = [...this.state.sushiList]

    console.log(sushiObj.name);
    // console.log(allSushi);
  }


  render() {
    // console.log(this.state.sushiList);

    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.currentSushi}
          eatSushi={this.handleEatSushi}
          />
        <Table
          money={this.state.money}
          />
      </div>
    );
  }
}

export default App;
