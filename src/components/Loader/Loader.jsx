import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
      <HashLoader color="blue" />
    </div>
  );
}
