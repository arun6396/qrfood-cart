import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import "../components/MenuSlogan.css";
export function MenuSlogan() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className="touch"
      >
        Touch
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          <marquee>We are always here to serve you</marquee>
        </div>
      </Fade>
    </div>
  );
}
