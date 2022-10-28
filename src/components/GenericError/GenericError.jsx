import React from "react";

export default function GenericError(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 m-3 gap-4">
      <h2>{props.msg}</h2>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/error.jpg`}
        width="50"
        alt="error"
      />
    </div>
  );
}
