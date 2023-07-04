import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PropertyDisplayrArea = () => {
  return (
    <>
      <div className="container-fluid">
        {/* navbar-area-start */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fs-0.5 fw-bold" href="#">
              All Properties
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

              <div className="btn-group">
                <button
                  className="btn  btn-sm dropdown-toggle sort-by-btn nav-button-side"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <ul className="dropdown-menu">...</ul>
              </div>
              <Link
                to="/addproperty"
                className="btn add-btn nav-button-side"
                type="submit"
              >
                <AddIcon sx={{ color: "#FFF" }} />
              </Link>
              <button className="btn filter-btn nav-button-side" type="submit">
                <FilterAltTwoToneIcon sx={{ color: "#FFF" }} />
              </button>
            </div>
          </div>
        </nav>
        {/* navbar-area-end  */}
      </div>
      {/* card-section-start */}
      {/* card-area-start  */}
      <div className="bg-light cantainer-fluid">
        <div className="row card-main-row">
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card-2">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bbb-btn btn">Occupied</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon-2"
                      src="./src/assets/car-parking.png"
                      alt=""
                    />
                    <span className="card-bottom-text">0</span>
                  </li>
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon"
                      src="./src/assets/bed.png"
                      alt=""
                    />
                    <span className="card-bottom-text">3</span>
                  </li>
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon"
                      src="./src/assets/basin.png"
                      alt=""
                    />
                    <span className="card-bottom-text">2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card-2">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bbb-btn btn">Occupied</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon-2"
                      src="./src/assets/car-parking.png"
                      alt=""
                    />
                    <span className="card-bottom-text">0</span>
                  </li>
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon"
                      src="./src/assets/bed.png"
                      alt=""
                    />
                    <span className="card-bottom-text">3</span>
                  </li>
                  <li className="list-group-item border-0">
                    <img
                      className="card-bottom-icon"
                      src="./src/assets/basin.png"
                      alt=""
                    />
                    <span className="card-bottom-text">2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card main-card">
              <img
                src="./src/assets/card-img-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body card-body-area">
                <h5 className="card-title">
                  <div className="row ">
                    <p className="card-text card-p">38 Nappan Drive</p>
                    <div className=" card-price col-sm-6 d-flex  align-item-center">
                      $12500
                    </div>
                    <div className="card-b col-sm-6 d-flex  align-item-center justify-content-center">
                      <div className="bb-btn btn">Vacant</div>
                    </div>
                  </div>
                </h5>

                <ul className="list-group d-flex flex-row justify-content-center border-top">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon-2"
                        src="./src/assets/car-parking.png"
                        alt=""
                      />
                      <span className="card-bottom-text">5</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/bed.png"
                        alt=""
                      />
                      <span className="card-bottom-text">3</span>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom">
                      <img
                        className="card-bottom-icon"
                        src="./src/assets/basin.png"
                        alt=""
                      />
                      <span className="card-bottom-text">2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 pagination-area">
            <Stack spacing={2}>
              <Pagination
                count={10}
                sx={{ color: "#DB1516" }}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>

      {/* card-area-end  */}

      {/* card-section-end */}
    </>
  );
};

export default PropertyDisplayrArea;
