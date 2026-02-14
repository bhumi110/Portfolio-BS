import PixelSnow from "../ReactBits/PixelSnow";
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="hero"
      className="hero-section d-flex align-items-center"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0B0F1A",
        overflow: "hidden",
      }}
    >
      {/* Background Snow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={380}
          speed={0.6}
          density={0.3}
          direction={125}
          brightness={0.6}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="round"
        />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-md-6 text-white">
            <Typography
              variant="subtitle2"
              sx={{
                color: "#f261bf",
                letterSpacing: 2,
                fontWeight: 600,
              }}
            >
              FULL-STACK DEVELOPER
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mt: 2,
              }}
            >
              I build scalable web systems that
              <span
                style={{
                  background: "linear-gradient(90deg,#6366F1,#f261bf)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                solve real problems.
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#aaa", mt: 3, maxWidth: 500 }}
            >
              Passionate developer with expertise in building scalable web
              applications. I love turning complex problems into elegant,
              user-friendly solutions.
            </Typography>

            <Box mt={4}>
              <Button
                variant="contained"
                href="#projects"
                sx={{
                  background: "linear-gradient(90deg,#6366F1,#7C3AED)",
                  textTransform: "none",
                  mr: 2,
                  px: 3,
                  py: 1.2,
                  borderRadius: "10px",
                }}
              >
                View Work
              </Button>

              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{
                  borderColor: "#444",
                  color: "#ccc",
                  textTransform: "none",
                  mr: 2,
                  px: 3,
                  py: 1.2,
                  borderRadius: "10px",
                }}
              >
                Resume
              </Button>

              {/* <Button
                startIcon={<MailOutlineIcon />}
                sx={{
                  borderColor: "#444",
                  color: "#ccc",
                  textTransform: "none",
                  mr: 2,
                  px: 3,
                  py: 1.2,
                  borderRadius: "10px",
                }}
              >
                Contact
              </Button> */}
            </Box>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-center">
            <div
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "15px",
                borderRadius: "25px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 40px rgba(124,58,237,0.25)",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={profile}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
