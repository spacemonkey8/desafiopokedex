import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active nav-link" : "nav-link";
  return (
    <>
      <Navbar expand="lg" bg="secondary" >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGkgLSu1iky-sGBmiN6eOxeS3--fsPOCq9w&usqp=CAU"
              width="40"
              height="40"
              />{" "}
          </Navbar.Brand>

          <Nav>
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}