import React from "react";

const SubmitButton = ({ buttonName }) => {
  return (
    <div className="col-sm-12">
      <button type="submit" className="btn btn-primary">
        {buttonName}
      </button>
      <button type="submit" className="btn btn-outline-secondary">
        Cancel
      </button>
    </div>
  );
};

export default SubmitButton;
