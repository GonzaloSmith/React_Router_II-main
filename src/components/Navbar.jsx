import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-between px-5"  variant="light"  style={{ background: "rgb(0,0,128)" }} >
      <Navbar.Brand>
        <img
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
      </Navbar.Brand>
      <div className="d-flex links">
        <ul><NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/">Home</NavLink></ul>
        <ul><NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/pokemones"> {" "}Pokemones{" "}</NavLink></ul>
      </div>
    </Navbar>
  );
};

export default NavBar;