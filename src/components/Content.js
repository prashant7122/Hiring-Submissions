import React from "react";
import Challenge from "./Challenge/Challenge";
import Report from "./Daily-Monitoring/Report";
import Recommendation from "./Recommendation/Recommendation";

const Content = () => {
  return( 
  <div className="main">
    <Report/>
    <Challenge/>
    <Recommendation/>
  </div>
  );
};

export default Content;
