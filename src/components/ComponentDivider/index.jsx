import React from "react";
import "./styles.sass";

const ComponentDivider = ({ bgGray, children, flexCol }) => {
  return (
    <div className={`componentDivider ${bgGray} `}>
      <div className='container'>
        <div className={`componentDividerContainer ${flexCol}`}>{children}</div>
      </div>
    </div>
  );
};

export default ComponentDivider;
