import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <nav className="navbar navbar-expand-lg bg-white border-bottom border-light-2 pb-0">
        <div className="container">
          <div
            className="top-nav collapse navbar-collapse d-flex align-item-center flex-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex align-item-center ">
              <li className="nav-item top-nav-li">
                <a
                  className="nav-link  d-flex text-decoration-none align-item-center ball"
                  href="#"
                >
                  <Badge badgeContent={4} color="error">
                    <NotificationsNoneOutlinedIcon color="action" />
                  </Badge>
                </a>
              </li>
              <li className="nav-item  top-nav-li">
                <a
                  className="nav-link d-flex text-decoration-none align-item-center"
                  href="#"
                >
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{ height: "30px", width: "30px" }}
                      alt="Remy Sharp"
                      src="./src/assets/avtar.jpg"
                    />
                  </Stack>
                </a>
                <a
                  className="nav-link dropdown-toggle p-0 top-nav-a"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hari
                </a>
              </li>
              <li className="nav-item dropdown top-nav-li">
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
