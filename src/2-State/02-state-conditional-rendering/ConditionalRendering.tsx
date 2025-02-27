import React from "react";

import IntroductionComponent from "../../1-Introduction/2-custom-component/IntroductionComponent";
import ChildComponent from "../../5-Debugging/01-starting-project/debug_component/ChildComponent";

const ConditionalRendering = () => {
  const isLoggedIn = false;

  return (
    <div>{isLoggedIn ? <IntroductionComponent /> : <ChildComponent />}</div>
  );
};

export default ConditionalRendering;
