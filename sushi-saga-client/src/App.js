import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()

    this.state = {
      sushis:[],
      sushiIndex: 0
    }

  }

  //SOLUTIONS FOR LIMIT 4
    //Pagination: limit 4 
    //Using slice and counter variable

  componentDidMount(){

    fetch(API)
    .then(res => res.json())
    .then(data => {
      let sushiArray = data.map(sushi=>  {return {...sushi, eaten:false}})
      this.setState({sushis:sushiArray}, () => console.log("state", this.state))
    })
    
  }

  getSushis(){
    //update sushiIndex when More Button is clicked! 
    let sushiArray = this.state.sushis.slice(this.state.sushiIndex,this.state.sushiIndex+4)

    return sushiArray
  }
  

  handleMoreButton=()=>{
    console.log("more!")

    this.setState({sushiIndex: this.state.sushiIndex+4})

  }

  handleEatSushi=(sushiObject)=>{

    //update eaten value of sushi with id x 

    let sushiArray = this.state.sushis.map(sushi => {
      if  (sushi.id === sushiObject.id ){
        sushi.eaten = true
        return sushi
      }
      else
        return sushi

    })

    this.setState({sushis:sushiArray})
  }


  getEatenSushis(){
    return this.state.sushis.filter(sushi =>sushi.eaten)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleEatSushi={this.handleEatSushi} handleMoreButton ={this.handleMoreButton} sushis={this.getSushis()} />
        <Table sushis={this.getEatenSushis()}/>
      </div>
    );
  }

}

export default App;