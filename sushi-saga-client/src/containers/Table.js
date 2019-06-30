import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.money} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(props.eatenSushi)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
