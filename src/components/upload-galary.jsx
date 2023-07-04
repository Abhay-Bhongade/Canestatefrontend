import React from "react";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

const UploadGalary = () => {
  return (
    <div className="galary-area-main">
      <h3 className="galary-heading " style={{ margin: "0 0 39px 0" }}>
        Upload Photo
      </h3>
      <div className="big-img mb-4">
        <img src="./src/assets/big-Union.png" alt="" />
      </div>
      {/* <div className="row grop-img pt-4">
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
      </div> */}
      <h3 className="galary-heading " style={{ margin: "39px 0 39px 0" }}>
        Upload Document
      </h3>
      <div className="add-upload-more btn  mt-4">
        <UploadFileOutlinedIcon className="file-icon" /> Identity Proof
      </div>
      <div className="add-upload-more btn  mt-4">
        <UploadFileOutlinedIcon className="file-icon" />
        Citizenship Certificate
      </div>
      <div className="upload-main">
        <div className="upload btn mt-4">Upload</div>
      </div>
    </div>
  );
};

export default UploadGalary;
