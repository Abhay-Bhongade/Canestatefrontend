import React from "react";
import GpsFixedTwoToneIcon from "@mui/icons-material/GpsFixedTwoTone";
import DatePicker from "react-datepicker";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import "react-datepicker/dist/react-datepicker.css";

const PersonalDetailsInLandlord = () => {
  return (
    <div>
      <div className="container bg-white  ">
        <div className="row">
          <h3 className="address-heading mt-2 mb-3">Personal Details</h3>
          <div className="mt-3">
            <input
              type="text"
              className="form-control address-input"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Email Id"
            />
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Phone Number"
            />
          </div>
          <div className="col-md-6 mt-3">
            <div className="mini-inputs-fordate">
              <DatePicker
                selectsStart
                placeholderText="DOB"
                // onKeyDown={(e) => {
                //   e.preventDefault();
                // }}
                className="date-picker-input"
              />
              <CalendarMonthTwoToneIcon
                className="calandar-icons"
                style={{ marginLeft: "6px" }}
              />
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="mini-inputs-fordate">
              <DatePicker
                selectsStart
                placeholderText="Joining Date"
                // onKeyDown={(e) => {
                //   e.preventDefault();
                // }}
                className="date-picker-input"
              />
              <CalendarMonthTwoToneIcon
                className="calandar-icons"
                style={{ marginLeft: "6px" }}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
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
          <div className="col-md-6 mt-3 mb-4">
            <input
              type="text"
              className="form-control mini-inputs"
              placeholder="Postal code"
            />
          </div>
          {/* <div className="col-md-12 mt-3 mb-2">
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
              <div className="col-md-12 address-form-check-top ">
                <div className="form-check address-form-check ">
                  <input
                    className="form-check-input check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck">
                    I accept the <a>terms & conditions</a> to add my property to
                    the canestate platform
                  </label>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsInLandlord;
