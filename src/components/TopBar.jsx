import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

function TopBar() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Nav className="text-nowrap align-items-center">
        <Nav.Link>
          <img className="logo" src={logo} alt="Netflix Logo" />
        </Nav.Link>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>TV Shows</Nav.Link>
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
