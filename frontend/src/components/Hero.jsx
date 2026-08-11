import React, { useRef, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import portfolioVideo from "../assets/portfolio_vd.mp4";

function Hero() {
  const videoRef = useRef(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_DURATION = 500;
    const FADE_OUT_TRIGGER = 0.55;

    function cancelRaf() {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }

    function fadeTo(targetOpacity, duration, onComplete) {
      cancelRaf();
      const start = performance.now();
      const startOpacity = parseFloat(video.style.opacity) || 0;
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        video.style.opacity =
          startOpacity + (targetOpacity - startOpacity) * progress;
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          onComplete && onComplete();
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    function handleCanPlay() {
      video.style.opacity = 0;
      fadingOutRef.current = false;
      fadeTo(1, FADE_DURATION);
    }

    function handleTimeUpdate() {
      const remaining = video.duration - video.currentTime;
      if (remaining <= FADE_OUT_TRIGGER && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_DURATION);
      }
    }

    function handleEnded() {
      cancelRaf();
      video.style.opacity = 0;
      setTimeout(() => {
        fadingOutRef.current = false;
        video.currentTime = 0;
        video.play().then(() => fadeTo(1, FADE_DURATION));
      }, 100);
    }

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelRaf();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "#000",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        src={portfolioVideo}
        autoPlay
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -33%)",
          objectFit: "cover",
          opacity: 0,
          zIndex: 0,
        }}
      />

      {/*Gradient overlay*/}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/*Vignette*/}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/*Hero content*/}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "820px",
          padding: "120px 24px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 18px",
            borderRadius: "999px",
            background: "rgba(242,97,191,0.1)",
            border: "1px solid rgba(242,97,191,0.28)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              flexShrink: 0,
              borderRadius: "50%",
              background: "#f261bf",
              display: "inline-block",
              boxShadow: "0 0 8px #f261bf",
            }}
          />
          <Typography
            component="span"
            sx={{
              color: "#f261bf",
              letterSpacing: "0.22em",
              fontWeight: 600,
              fontSize: { xs: "0.6rem", sm: "0.65rem" },
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            FULL STACK DEVELOPER | AI/ML ENTHUSIAST
          </Typography>
        </div>

        {/* Heading */}
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.1rem", sm: "2.9rem", md: "3.8rem", lg: "4.4rem" },
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            textShadow: "0 4px 32px rgba(0,0,0,0.7)",
            mb: 0,
          }}
        >
          I build scalable
          <br />
          web systems that
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #fa529b 10%, #a855f7 55%, #f53689 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            solve real problems.
          </span>
        </Typography>

        <div
          style={{
            width: "44px",
            height: "2px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #6366F1, #f261bf)",
            margin: "28px auto",
            opacity: 0.75,
            flexShrink: 0,
          }}
        />

        {/* Subtitle */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: { xs: "0.88rem", sm: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            maxWidth: { xs: "100%", sm: "480px" },
            textShadow: "0 1px 12px rgba(0,0,0,0.6)",
            mb: { xs: 4, md: 5 },
          }}
        >
          Passionate developer with expertise in building scalable web
          applications. I love turning complex problems into elegant,
          user-friendly solutions.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1.5, sm: 2 },
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            href="#projects"
            sx={{
              background: "linear-gradient(135deg, #6366F1, #7C3AED)",
              textTransform: "none",
              px: { xs: 3, sm: 3.5 },
              py: { xs: 1.1, sm: 1.3 },
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: { xs: "0.88rem", sm: "0.95rem" },
              letterSpacing: "0.01em",
              boxShadow:
                "0 4px 24px rgba(99,102,241,0.45), 0 0 0 1px rgba(99,102,241,0.25)",
              transition: "all 0.22s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #4F52D3, #6A30CC)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.6)",
                transform: "translateY(-2px)",
              },
            }}
          >
            View Work
          </Button>

          <a
            href="/Resume_Bhumi_Saraogi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                px: { xs: 3, sm: 3.5 },
                py: { xs: 1.1, sm: 1.3 },
                borderRadius: "12px",
                fontSize: { xs: "0.88rem", sm: "0.95rem" },
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.06)",
                transition: "all 0.22s ease",
                minWidth: 0,
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.38)",
                  background: "rgba(255,255,255,0.12)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <i
                className="fa-regular fa-eye"
                style={{ marginRight: "8px", fontSize: "0.9rem" }}
              />
              Resume
            </Button>
          </a>
        </Box>

      </div>
    </section>
  );
}

export default Hero;