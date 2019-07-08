import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let increment = 1
class App extends Component {

//--------------------------CREATE STATES

  state = {
    sushiList: [],
    currentSushi: [],
    money: 100,

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

//-------------SHOW MORE SUSHI----------

handleShowMore = () => {

  increment++
  let currentSushi = [...this.state.currentSushi]
  let lastSushi = currentSushi[3]

  let allSushi = [...this.state.sushiList]
  let index = allSushi.indexOf(lastSushi)

  let four = allSushi.slice(0+increment,4+increment)
  console.log(four);
  this.setState({currentSushi: four})

}



//--------------EAT SUSHI AND REMOVE PICTURE
  handleEatSushi = (sushiObj) => {
    let name = sushiObj.name
    let allSushi = [...this.state.sushiList]
    let index = allSushi.indexOf(sushiObj)
    console.log(sushiObj);
  }


  render() {
    // console.log(this.state.sushiList);

    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.currentSushi}
          eatSushi={this.handleEatSushi}
          showMore={this.handleShowMore}
          />

        <Table
          money={this.state.money}
          />
      </div>
    );
  }
}

export default App;
