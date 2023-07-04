import React from 'react'

const PropertyGalary = () => {
  return (
    <div className="galary-area-main">
      <h3 className="galary-heading " style={{margin: "0 0 39px 0"}}>Gallery</h3>
      <div className="big-img">
        <img src="./src/assets/big-Union.png" alt="" />
      </div>
      <div className="row grop-img pt-4">
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
      <div className="add-more btn  mt-4">Add More Images</div>
      <div className="upload-main">
        <div className="upload btn mt-4">Upload</div>
      </div>
    </div>
  );
}

export default PropertyGalary