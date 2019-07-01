import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log(props.sushis);
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(props.index, props.index + 4).map(sushi => (
          <Sushi
            {...sushi}
            eatSushi={props.eatSushi}
            eatenSushi={props.eatenSushi}
          />
        ))}
        <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
