import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropertyGalary from "./property-galary-area";
import StepperFromRooms from "./StepperFromRooms";
import RoomsGalary from "./rooms-galary-area";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DatePicker from "react-datepicker";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

const RoomsFeatureDetails = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand fs-0.5 fw-bold" href="#">
            Add Rooms
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="seach-box navbar-nav mx-auto mb-2 mb-lg-0 input-group mb-3  overflow-hidden ">
              <span
                className="icon-search input-group-text bg-white border-0 pe-1"
                id="basic-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="search"
                className="form-control hide-focus border-0 search-input"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <button
              className="btn filter-btn nav-button-side-refresh "
              // data-toggle="modal"
              // data-target="#myModal2"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <LoopOutlinedIcon className="refresh" />
            </button>
          </div>
        </div>
      </nav>
      {/* navbar-area-end  */}

      <div className="cantainer-fluid rooms-main-cantainer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-4 mb-1">
              {/* Step-from-start  */}
              <StepperFromRooms />
              {/* Step-from-end  */}
            </div>
            <div className="col-md-4 galary-area-top">
              {/* gelary area start */}
              <RoomsGalary />
              {/* gelary area end*/}
            </div>
          </div>
        </div>
      </div>

      <div class="modal right fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Filters</h4>
              <button type="button" class="btn" data-bs-dismiss="modal">
                <HighlightOffIcon className="modal-header-close" />
              </button>
            </div>

            <div class="modal-body">
              <div className="my-2">
                <select
                  className="form-select select-input-modal"
                  aria-label="Default select example"
                >
                  <option defaultValue>Status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="my-2">
                <select
                  className="form-select select-input-modal"
                  aria-label="Default select example"
                >
                  <option defaultValue>Room size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="my-2">
                <div className="modal-inputs-fordate">
                  <DatePicker
                    selectsStart
                    placeholderText="From"
                    // onKeyDown={(e) => {
                    //   e.preventDefault();
                    // }}
                    className="date-picker-input"
                  />
                  <CalendarMonthTwoToneIcon
                    className="calandar-icons"
                    style={{ marginLeft: "95px" }}
                  />
                </div>
              </div>
              <div className="my-2">
                <div className="modal-inputs-fordate">
                  <DatePicker
                    selectsStart
                    placeholderText="To"
                    // onKeyDown={(e) => {
                    //   e.preventDefault();
                    // }}
                    className="date-picker-input"
                  />
                  <CalendarMonthTwoToneIcon
                    className="calandar-icons"
                    style={{ marginLeft: "95px" }}
                  />
                </div>
              </div>
              <div className="my-2 mt-3">
                <div className="upload-main">
                  <div className="upload btn mt-4">Apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filters-modal-end */}
    </>
  );
};

export default RoomsFeatureDetails;
