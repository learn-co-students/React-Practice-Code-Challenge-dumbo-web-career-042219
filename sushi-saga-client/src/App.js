import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let increment = 1
class App extends Component {

//--------------------------CREATE STATES--------------

  state = {
    sushiList: [],
    currentSushi: [],
    money: 100,

  }

////----------FETCH SUSHI-----------------------------
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


//----------------CHARGE FOR SUSHI-------

  handleCharge = (sushiObj) => {
    console.log(`I cost $${sushiObj.price}`);
    let money = this.state.money

    if (money >= sushiObj.price) {
      let moneyLeft = this.state.money - sushiObj.price
      this.setState({money: moneyLeft})
    }


  }


//-------------------ADD MONEY-----------------

  handleDeposit = (addObj) => {
    // console.log("heyyy");
    let currentMoney = this.state.money
    let addMoney = parseInt(addObj)
    let difference = currentMoney + addMoney
    this.setState({money: difference})
  }

  render() {
    // console.log(this.state.sushiList);

    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.currentSushi}
          eatSushi={this.handleEatSushi}
          showMore={this.handleShowMore}
          chargeMoney={this.handleCharge}
          money={this.state.money}
          />

        <Table
          money={this.state.money}
          deposit={this.handleDeposit}
          />
      </div>
    );
  }
}

export default App;
