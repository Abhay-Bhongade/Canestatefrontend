import { Link } from "react-router-dom";
import SideNavbar from "./side-navbar";
import TopNavbar from "./top-navbar";
import FeatureDetails from "./feature-details";
import RoomsDisplayArea from "./RoomsDisplayArea";
import RoomsFeatureDetails from "./RoomsFeatureDetails";

const Home = () => (
  <div className="cantainer-fluid">
    <div className="row w-100">
      {/* sidebar start */}
      <div className="bg-white col-auto col-md-1 col-lg-1 min-vh-100 d-flex flex-column justify-content-between">
        <SideNavbar />
      </div>
      {/* sidebar end*/}
      {/* header-top-start */}
      <div className="bg-white col-auto col-md-11 col-lg-11 ">
        <TopNavbar />
        <FeatureDetails />
        {/* <RoomsDisplayArea/> */}
        {/* <RoomsFeatureDetails/> */}
      </div>
      {/* header-top-end */}
    </div>
  </div>
);

export default Home;
