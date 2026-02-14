import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: "#0B0F1A", 
        boxShadow: "none", 
        borderBottom: "1px solid rgba(255,255,255,0.1)" 
      }}
    >
      <Toolbar className="container d-flex justify-content-between">
        
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#bd088c" }}>
          BS.
        </Typography>

        {/* Nav Links
        <div>
          <Button href="#about" sx={{ color: "#ccc" }}>About</Button>
          <Button href="#skills" sx={{ color: "#ccc" }}>Skills</Button>
          <Button href="#projects" sx={{ color: "#ccc" }}>Projects</Button>
          <Button href="#experience" sx={{ color: "#ccc" }}>Experience</Button>
          <Button href="#contact" sx={{ color: "#ccc" }}>Contact</Button>
        </div> */}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
