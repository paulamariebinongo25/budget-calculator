// import React from "react";

// const AlertNotifications = ({ type, text }) => {
//   return <div className={`alert alert-${type}`}>{text}</div>;
// };

// export default AlertNotifications;
import React from "react";

const Alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Alert;
