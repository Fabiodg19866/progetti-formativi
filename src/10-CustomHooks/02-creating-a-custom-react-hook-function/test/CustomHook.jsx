import React from "react";
import CustomHookStyle from "./CustomHookStyle";
import CustomHookCounter from "./CustomHookCounter";

const CustomHook = () => {
  return (
    <React.Fragment>
          <CustomHookStyle/>
          <CustomHookCounter/>
    </React.Fragment>
  );
};

export default CustomHook;
