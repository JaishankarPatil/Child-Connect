import React from "react";

const CustomeButton = ({ buttonName }) => {
  return (
    <div className="col-sm-12">
      <button type="button" className="btn btn-primary">
        {buttonName}
      </button>
    </div>
  );
};

export default CustomeButton;
