import React from "react";

export default function Error404() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/error404.png`}
        alt="404"
      />
    </div>
  );
}
