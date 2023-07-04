import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import FeatureDetailsInProperty2 from "./FeatureDetailsInProperty2";
import RentDetailsInProperty from "./RentDetailsInProperty";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    color: "#616161",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#ff0000",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#fff",
        opacity: 1,
        border: "0.6px solid #F00",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#39393D",
    opacity: 1,
    border: "0.6px solid #F00",
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const FeatureDetailsInProperty = ({ onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.checked;
    setIsChecked(value);
    onCheckboxChange(value);
  };
  const [roomCount, setRoomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);

  const handleIncrement = () => {
    setRoomCount(roomCount + 1);
  };

  const handleDecrement = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  const hanleBathroomIncrement = () => {
    setBathroomCount(bathroomCount + 1);
  };
  const hanleBathroomDecrement = () => {
    if (bathroomCount > 0) {
      setBathroomCount(bathroomCount - 1);
    }
  };

  const hanleParkingIncrement = () => {
    setParkingCount(parkingCount + 1);
  };
  const hanleParkingDecrement = () => {
    if (parkingCount > 0) {
      setParkingCount(parkingCount - 1);
    }
  };

  return (
    <>
      <div className="card border-0" style={{ width: "32rem" }}>
        <h3 className="mt-2 mb-1 headingcombine">Feature Details</h3>

        <div className="mt-3">
          <input
            type="text"
            className="form-control address-input"
            placeholder="Add Property Name"
          />{" "}
        </div>
        <div className="flexspbtn mt-2">
          <div className="singleroomcnt">
            <h6 className="roomtext" style={{ marginLeft: "-1.5rem" }}>
              Rooms
            </h6>
            <div className="threecnt">
              <div className="iconbg" onClick={handleDecrement}>
                <RemoveIcon sx={{ fontSize: "0.875rem" }} />
              </div>
              <div className="mx-2">{roomCount}</div>
              <div className="iconbg" onClick={handleIncrement}>
                <AddIcon sx={{ fontSize: "0.875rem" }} />
              </div>
            </div>
          </div>

          <div className="singleroomcnt">
            <h6 className="roomtext">Bathrooms</h6>
            <div className="threecnt">
              <div className="iconbg" onClick={hanleBathroomDecrement}>
                <RemoveIcon sx={{ fontSize: "0.875rem" }} />
              </div>
              <div className="mx-2">{bathroomCount}</div>
              <div className="iconbg" onClick={hanleBathroomIncrement}>
                <AddIcon sx={{ fontSize: "0.875rem" }} />
              </div>
            </div>
          </div>
          <div className="singleroomcnt">
            <h6 className="roomtext" style={{ marginLeft: "-1.5rem" }}>
              Parking
            </h6>
            <div className="threecnt">
              <div className="iconbg" onClick={hanleParkingDecrement}>
                <RemoveIcon sx={{ fontSize: "0.875rem" }} />
              </div>
              <div className="mx-2">{parkingCount}</div>
              <div className="iconbg" onClick={hanleParkingIncrement}>
                <AddIcon sx={{ fontSize: "0.875rem" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 ">
          <h6 className="text-left mb-2 mid-zone-heading">Ammenities</h6>
          <div>
            <p className="dynamic-width-text">Shed</p>
            <p className="dynamic-width-text mx-2">Tennis Court</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text mx-2">Tennis Court</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text ">On Site Security</p>
            <p className="dynamic-width-text mx-2">Tennis Court</p>
            <p className="dynamic-width-text ">Shed</p>
            <p className="dynamic-width-text mx-2">On Site Security</p>
            <p className="dynamic-width-text ">Tennis Court</p>
          </div>
        </div>
        <div>
          <div className="mt-3">
            <h6 className="text-left mb-2 mid-zone-heading">
              Tenant Liabilities
            </h6>
            <div></div>
            <p className="dynamic-width-text">Tennis Court</p>
            <p className="dynamic-width-text mx-2">Shed</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text mx-2">Tennis Court</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text mx-2">Shed</p>
            <p className="dynamic-width-text">On Site Security</p>
            <p className="dynamic-width-text mx-2">Tennis Court</p>
          </div>
        </div>
        <div className="checkboxcnt mb-3">
          <div className="control-container">
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Furnished"
            />
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Pets Allow"
            />
          </div>
          <div className="form-check address-form-check  second-step-from-check mt-3">
            <input
              className="form-check-input check-input second-step-check"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
              onChange={handleCheckboxChange}
            />
            <label
              className="form-check-label second-step-check-labal"
              htmlFor="invalidCheck"
            >
              You can split the house into rooms where you can earn
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureDetailsInProperty;
