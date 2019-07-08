import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {


  render() {
    let sushis = this.props.sushis.map(sushi => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        eat={this.props.eatSushi}
        />
    ))

  return (
    <Fragment>
      <div className="belt">
        {
          sushis
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}
}
export default SushiContainer
