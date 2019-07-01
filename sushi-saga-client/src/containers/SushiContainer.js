import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi sushi={sushi} handleEatSushi={props.handleEatSushi}/>)
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer