import { useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Navbar className="header">
      <div className="header-nav">
        <div className="search-container">
          <div className="search-icon">
            <i className="bi bi-search" />
          </div>
          <input
            type="text"
            placeholder="Search for Artists, Songs, or Podcasts..."
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <Nav className="nav-drop">
          <NavDropdown
            title={<i className="bi bi-person-fill" />}
            id="nav-dropdown"
            menuVariant="dark"
            drop="start"
          >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Preferences</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
