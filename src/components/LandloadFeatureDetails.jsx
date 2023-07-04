import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropertyGalary from "./property-galary-area";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LandloardStepperFrom from "./stepper-landload";
import UploadGalary from "./upload-galary";


const LandloadFeatureDetails = () => {
  return (
    <>
      <div className="container-fluid">
        {/* navbar-area-start */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fs-0.5 fw-bold" href="#">
              Add Landlord
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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

              {/* <div className="btn-group">
                <button
                  className="btn  btn-sm dropdown-toggle sort-by-btn nav-button-side"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <ul className="dropdown-menu">...</ul>
              </div> */}
              <Link
                to="/features"
                className="btn add-btn nav-button-side"
                type="submit"
              >
                <PeopleOutlinedIcon sx={{ color: "#FFF" }} />
              </Link>
              <button
                className="btn filter-btn nav-button-side-refresh"
                type="submit"
              >
                <LoopOutlinedIcon className="refresh" />
              </button>
            </div>
          </div>
        </nav>
        {/* navbar-area-end  */}
      </div>
      {/* Add Properties area start */}

      <div className="cantainer-fluid rooms-main-cantainer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-4 mb-1">
              {/* Step-from-start  */}
              <LandloardStepperFrom />
              {/* Step-from-end  */}
            </div>
            <div className="col-md-4 galary-area-top">
              {/* gelary area start */}
              <UploadGalary />
              {/* gelary area end*/}
            </div>
          </div>
        </div>
      </div>

      {/* Add Properties area end*/}
    </>
  );
};

export default LandloadFeatureDetails;
