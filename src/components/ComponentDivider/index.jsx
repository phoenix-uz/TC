import React from "react";
import "./styles.sass";

const ComponentDivider = ({ id, bgGray, children, flexCol, bgImage }) => {
  return (
    <div
      className={`componentDivider ${bgGray} ${bgImage}`}
      id={id}
    >
      <div className='container'>
        <div className={`componentDividerContainer ${flexCol}`}>{children}</div>
      </div>
    </div>
  );
};

export default ComponentDivider;
