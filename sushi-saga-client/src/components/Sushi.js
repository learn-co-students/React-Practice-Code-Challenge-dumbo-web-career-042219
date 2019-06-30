import React, { Fragment } from "react";

const Sushi = props => {
  console.log(props);

  const eat = () => {
    props.eatSushi(props.id);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={eat}>
        {props.eatenSushi.find(sushi => sushi.id === props.id) ? null : (
          <img src={props.img_url} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
};

export default Sushi;
