import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

	state = {
		sushiList: [],
		enjoyedSushi: [],
		sushiDex: 0,
		money: 500
	}

componentDidMount() {
	fetch(API)
		.then(resp => resp.json())
		.then(parsedSushis => {
			this.setState ({ sushiList: parsedSushis })
		})
}

handleMoreSoosh = () => {
	this.state.sushiDex === 96 ? this.setState({ sushiDex: 0 }) : this.setState({sushiDex: this.state.sushiDex + 4})
	
}

nomNomNom = (eatenSush) => {
	if (this.state.money < eatenSush.price) {
		alert("You don't have the cash for this sushi!")
	} else {
		this.setState({ money: this.state.money - eatenSush.price })
		this.setState({ enjoyedSushi: [...this.state.enjoyedSushi, eatenSush] })
			}
}

takeMeAway = (mySushi) => {
	 this.state.enjoyedSushi.filter(sushi => {
	 	return (sushi.id == mySushi.id ? null : <img src={mySushi.img_url} width="100%" alt="sushi" /> ) 
	})
}

  render() {
	fetch(API)
		.then(resp => resp.json())
		.then(parsedSushis => {
			this.setState ({ sushiList: parsedSushis })
		})

const currentSoosh = this.state.sushiList.slice(this.state.sushiDex, this.state.sushiDex + 4)

    return (
      <div className="app">
        <SushiContainer eatenSush={this.state.enjoyedSushi} takeMe = {this.takeMeAway} nomNomNom={this.nomNomNom} moreSoosh={this.handleMoreSoosh} sushis={currentSoosh} />
        <Table enjoyedSushi={this.state.enjoyedSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;