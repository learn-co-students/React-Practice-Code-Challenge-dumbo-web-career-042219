import React, { Fragment } from 'react'

const Sushi = (props) => {


    const eatMe = () => {
      if (props.eatenSush.find(sushi => sushi.id === props.sushiDeets.id) ) {
        alert('you already ate me!')
      } else {
      let nommedSush = {
        price: props.sushiDeets.price,
        id: props.sushiDeets.id
      }
        {props.nomNomNom(nommedSush)}
    }
}

  return (
    <div className="sushi"  >
      <div 
            id={props.sushiDeets.id}
            className="plate"
            onClick={eatMe} 
            >
         { props.eatenSush.find(sushi => sushi.id === props.sushiDeets.id) ? null : <img src={props.sushiDeets.img_url} width="100%" alt="sushi" /> } 
      </div>
      <h4 className="sushi-details">
        {props.sushiDeets.name} - ${props.sushiDeets.price}
      </h4>
    </div>
  )
}

export default Sushi