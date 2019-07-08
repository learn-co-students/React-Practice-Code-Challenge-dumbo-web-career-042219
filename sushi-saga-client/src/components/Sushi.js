import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleEatClick = (event) => {

    if (this.props.money>= this.props.sushi.price) {
      this.setState({eaten: true})
      this.props.eat(this.props.sushi)
      this.props.charge(this.props.sushi)
    } else {
      alert("You don't have enough money")
    }

  }

  render() {
    console.log(this.props);
    let imgObj = {eaten: false}
    if (this.state.eaten) {
      imgObj.eaten = true
    }
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.handleEatClick}>
        {
          /* Tell me if this sushi has been eaten! */
          imgObj.eaten ?

          null :

            <img src={this.props.sushi.img_url} width="100%" />

        }
      </div>
      <h4 className="sushi-details">

        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}
export default Sushi
