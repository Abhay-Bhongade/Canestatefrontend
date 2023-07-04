import React from "react";

const RoomsGalary = () => {
  return (
    <div className="galary-area-main">
      <h3 className="galary-heading">Gallery</h3>
      <div className="big-img">
        <img src="./src/assets/big-Union.png" alt="" />
      </div>
      <div className="row grop-img pt-3">
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img src="./src/assets/big-Union.png" alt="" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img src="./src/assets/big-Union.png" alt="" />
          </div>
        </div>
      </div>
      <div className="add-more btn mt-3">Add More Image</div>
      <div className="upload-main">
        <div className="upload btn mt-3">Upload</div>
      </div>
    </div>
  );
};

export default RoomsGalary;
