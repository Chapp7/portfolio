const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar__content">
        <div className="logo">
          <a href="#logo" aria-label="Go to Logo">
            Logo
          </a>
        </div>

        <div className="navbar__links">
          <a href="#home" aria-label="Go to Home">
            Home
          </a>
          <a href="#projects" aria-label="View Projects">
            Projects
          </a>
          <a href="#about" aria-label="Learn About Us">
            About
          </a>
          <a href="#services" aria-label="View Services">
            Experience
          </a>
          <a href="#contact" aria-label="Contact Us">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
