import React from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="site-nav">
      <nav className="site-nav__inner" aria-label="Main">
        <a className="nav-logo" href="#hero">
          BS.
        </a>

        {/* <div className="site-nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;