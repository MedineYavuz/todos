import React from "react";

const List = ({ task }) => {
  return (
    <div className="list">
      <p className="li">{task.task}</p>
    </div>
  );
};

export default List;
