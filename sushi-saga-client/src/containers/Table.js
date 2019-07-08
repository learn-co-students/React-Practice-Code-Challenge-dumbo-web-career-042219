import React, {Fragment} from 'react'

class Table extends React.Component {

  state = {
    add: 0
  }
  handleChange = (event) => {
    this.setState({add: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.deposit(this.state.add)
  }
  render() {

    const renderPlates = (array) => {
      return array.map((x, index) => {
        return <div className="empty-plate" style={{
            top: -7 * index
          }}/>
      })
    }

    return (<Fragment>

      <h1 className="remaining">
        <form onSubmit= {this.handleSubmit}>
          <input onChange={this.handleChange} value= {this.state.money} placeholder="Add money">
          </input>
        <input type="submit" value={"Add Money!"} />
        </form>
        You have: ${this.props.money}  remaining!

      </h1>


      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>


      </div>
    </Fragment>)
  }
}
export default Table
