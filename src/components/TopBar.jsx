import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";

function TopBar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Nav className="text-nowrap align-items-center">
        <Nav.Link>
          <img className="logo" src={logo} alt="Netflix Logo" />
        </Nav.Link>
        <Nav.Link>Home</Nav.Link>
        <Link className={`nav-link ${location.pathname === "/tv-shows" ? "active fw-bold" : ""}`} to="/TvShows">
          TV Shows
        </Link>
        <Nav.Link>Movies</Nav.Link>
        <Nav.Link>Recently Added</Nav.Link>
        <Nav.Link>My List</Nav.Link>
      </Nav>
      <Container className="justify-content-end gap-2">
        <p className="text-light my-auto">Pierluigi</p>
        <img className="kid fluid" src={avatar} alt="kid" />
      </Container>
    </Navbar>
  );
}

export default TopBar;
