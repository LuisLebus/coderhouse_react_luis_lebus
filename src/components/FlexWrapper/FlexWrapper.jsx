import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function FlexWrapper(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center m-5 gap-5">
      {props.children}
    </div>
  );
}
