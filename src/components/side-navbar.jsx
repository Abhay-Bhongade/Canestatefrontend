import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="bg-white p-2 sidemenu">
      <Link
        to="/"
        className="d-flex text-decoration-none align-item-center mt-2 justify-content-center"
      >
        <img
          className="fs-4 d-none d-sm-inline brand-logo"
          src="./src/assets/main-logo.png"
          alt="logo"
        />
      </Link>
      <ul className="nav nav-pills flex-column mt-4">
        <li className="nav-item side-nav-item ">
          <Link to="/" className="nav-link icon-container">
            <img src="./src/assets/icon-1.png" alt="" />
            <img src="./src/assets/dashboard-hover.png" alt="" />
          </Link>
        </li>
        <li className="nav-item side-nav-item ">
          <Link to="/landlord" className="nav-link icon-container">
            <img src="./src/assets/landlord.png" alt="" />
            <img src="./src/assets/landlord-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/property" className="nav-link icon-container">
            <img src="./src/assets/icon-3.png" alt="" />
            <img src="./src/assets/property-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/rooms" className="nav-link icon-container">
            <img src="./src/assets/icon-4.png" alt="" />
            <img src="./src/assets/room-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/tenant" className="nav-link icon-container">
            <img src="./src/assets/icon-5.png" alt="" />
            <img src="./src/assets/tenant-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-6.png" alt="" />
            <img src="./src/assets/openhouse-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-7.png" alt="" />
            <img src="./src/assets/maintenance-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-8.png" alt="" />
            <img src="./src/assets/finance-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-9.png" alt="" />
            <img src="./src/assets/agreements-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-10.png" alt="" />
            <img src="./src/assets/contractor-hover.png" alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src="./src/assets/icon-11.png" alt="" />
            <img src="./src/assets/Inquires-hover.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
