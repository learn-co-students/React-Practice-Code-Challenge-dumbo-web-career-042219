import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
  
          props.sushis.map(sushi => < Sushi eatenSush={props.eatenSush} takeMe={props.takeMe} nomNomNom={props.nomNomNom} sushiDeets={sushi} /> )

        }
        <MoreButton moreSoosh={props.moreSoosh}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer