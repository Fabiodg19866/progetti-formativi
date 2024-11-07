import React from "react";
import ChildProps from "./ChildProps";

const ParentProps = () => {
  return (
    <div>
      <ChildProps surname="verdi" city="italy" age={35} />
    </div>
  );
};

export default ParentProps;
