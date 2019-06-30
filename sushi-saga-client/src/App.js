import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eatenSushi: [],
      index: 0,
      money: 100
    };
  }

  fetchSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          sushis: data
        });
      });
  };

  componentDidMount() {
    this.fetchSushi();
  }

  nextFour = () => {
    let newFourSushis = this.state.index + 4;
    this.setState({
      index: newFourSushis
    });
  };

  eatSushi = id => {
    let sushis = this.state.sushis;
    let eatenSushi = this.state.eatenSushi;
    let lastEatenSushi = sushis.find(sushi => sushi.id === id);
    if (eatenSushi.find(sushi => sushi.id === lastEatenSushi.id)) {
      alert("You ate this sushi already!");
    } else if (this.state.money >= lastEatenSushi.price) {
      let calculateMoney = this.state.money - lastEatenSushi.price;
      this.setState({
        eatenSushi: [...eatenSushi, lastEatenSushi],
        money: calculateMoney
      });
    } else {
      alert("You are broke! Go home!");
    }
  };

  render() {
    console.log(this.state.sushis);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          eatenSushi={this.state.eatenSushi}
          eatSushi={this.eatSushi}
          nextFour={this.nextFour}
          index={this.state.index}
        />
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
