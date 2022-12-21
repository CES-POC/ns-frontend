import React from "react";

const Alerts = (props) => {
  return (
    <div className={props.variant} role="alert">
      {props.alertshow}
    </div>
  );
};

export default Alerts;
