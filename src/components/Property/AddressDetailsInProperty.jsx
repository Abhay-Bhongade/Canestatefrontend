import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GpsFixedTwoToneIcon from "@mui/icons-material/GpsFixedTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachmentIcon from "@mui/icons-material/Attachment";
import BallotIcon from "@mui/icons-material/Ballot";
import { Padding } from "@mui/icons-material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import BedIcon from "@mui/icons-material/Bed";
import DomainIcon from "@mui/icons-material/Domain";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Typography, TextField, Button, MenuItem, Box } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
const AddressDetailsInProperty = () => {
  const [isVerificationDialogOpen, setisVerificationDialogOpen] =
    useState(false);
  const handleOpenVerificationDialog = () => {
    setisVerificationDialogOpen(true);
  };
  const handleCloseVerificationDialog = () => {
    setisVerificationDialogOpen(false);
  };
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.checked);
    setIsCheckboxChecked(e.target.checked);
    handleOpenVerificationDialog();
  };
  return (
    <>
      <div className="container bg-white  ">
        <div className="row">
          <h3 className="address-heading mt-2">Address Details</h3>
          <div className="col-md-12 mt-3">
            <div className="text-end">
              <AddCircleOutlineIcon
                color="error"
                sx={{ fontSize: "20px", Padding: "0 0 2px 0" }}
              />
              <span className="addaddressheading ms-2">
                Add Address Manually
              </span>
            </div>
            <div className="search-container">
              <input
                type="text"
                className="address-input form-control "
                placeholder="Enter Address"
              />
              <div className="address-btn">
                <GpsFixedTwoToneIcon
                  sx={{ fontSize: "18px", fontWeight: 100 }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="No."
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="Street Name"
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="City"
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="Province"
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="Country"
            />
          </div>
          <div className="col-md-6 mt-3 ">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="Postal code"
            />
          </div>
          <div className="col-md-12 mt-3">
            <div className="icons-button-main">
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>
              </div>
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <ApartmentIcon />
                  <p>Apartment</p>
                </div>
              </div>
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <LocationCityIcon />
                  <p>Townhouse</p>
                </div>
              </div>
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <ImportantDevicesIcon />
                  <p>Studio</p>
                </div>
              </div>
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <BedIcon />
                  <p>Suite</p>
                </div>
              </div>
              <div className="button-top-lyear">
                <div className="icons-mid-area">
                  <DomainIcon />
                  <p>Commercial</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <select
              className="form-select select-input"
              aria-label="Default select example"
            >
              <option selected>Landlord Name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-12 address-form-check-top">
            <div className="form-check address-form-check ">
              <input
                className="form-check-input check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
                onChange={(e) => handleChange(e)}
              />
              <label className="form-check-label" for="invalidCheck">
                I accept the <a>terms & conditions</a> to add my property to the
                canestate platform
              </label>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isVerificationDialogOpen && isCheckboxChecked}
        onClose={handleCloseVerificationDialog}
        className="custom-dialog"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "600px",
          height: "90vh",
          marginLeft: "30%",
          marginTop: "2rem",
          borderRadius: "16px",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseVerificationDialog}
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
            backgroundColor: "grey",
            width: "25px",
            height: "25px",
          }}
        >
          <CloseIcon sx={{ color: "white", fontSize: "16px" }} />
        </IconButton>

        <DialogTitle
          className=""
          style={{
            textAlign: "left",
            fontWeight: "700",
            fontSize: "1rem",
          }}
        >
          Terms & Conditions
        </DialogTitle>
        <hr />
        <DialogContent style={{ height: "500px", paddingTop: "0px" }}>
          <DialogTitle
            className="my-1"
            style={{
              textAlign: "left",
              fontWeight: "700",
              fontSize: "0.875rem",
              padding: "0px",
            }}
          >
            In contract Law, Terms means Terms
          </DialogTitle>
          <ul>
            <li>
              In Contract Law, Terms means Terms of a Contract, the conditions
              and warranties agreed upon between parties to the contract.
              Contract terms may be verbal or in writing. Conditions are those
              terms which are so important that one or more of the parties would
              not enter into the contract without them.
            </li>
            <li className="py-2">
              {" "}
              The conditions and warranties agreed upon between parties to the
              contract.
            </li>
            <li>
              Contract terms may be verbal or in writing. Conditions are those
              terms which are so
            </li>
            <li className="py-2">
              {" "}
              Important that one or more of the parties would not enter into the
              contract without them.
            </li>
            <li>
              In Contract Law, Terms means Terms of a Contract, the conditions
              and warranties agreed upon between parties to the contract.
              Contract terms may be verbal or in writing. Conditions are those
              terms which are so important that one or more of the parties would
              not enter into the contract without them Conditions are those
              terms which are so important that one or more of the parties would
              not enter into the contract without them..
            </li>
          </ul>

          <DialogActions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=""
          >
            <Button
              variant="contained"
              className="mt-2 okaybtn"
              type="submit"
              onClick={handleCloseVerificationDialog}
            >
              Okay
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddressDetailsInProperty;
