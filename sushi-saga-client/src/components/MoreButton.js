import React from 'react'

class MoreButton extends React.Component {

  handleClick = (event) => {
    console.log(event.target);
    this.props.more()
  }

  render() {
  return <button onClick={this.handleClick}>
            More sushi!
          </button>
}}

export default MoreButton
