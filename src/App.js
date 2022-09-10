import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { GiPapers } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "🔨",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div
          className="toggle-btn"
          onClick={() => setdarkmode(!darkmode)}
        ></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src="/Artboard 9.png" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>RIOST</h1>
              <p className="mt-16">
                <strong>Design Graphic</strong>
              </p>
              <Typist cursor={config_cursor}>
                Desain Komunikasi Visual | Freelance Logo | Poster | Icon |
                Vector
              </Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={1000}>
                <span className="higthlight">Adobe Photoshop</span>
                <span className="higthlight">Adobe Ilustrator</span>
                <span className="higthlight">Adobe After Effects</span>
                <span className="higthlight">Adobe Premier Pro</span>
                <span className="higthlight">Adobe Lightroom</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/riost._/"
            >
              <BsInstagram />
              <span>riost._</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/m_riosetyo/"
            >
              <BsInstagram />
              <span>m_riosetyo</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/jai_gift/"
            >
              <BsInstagram />
              <span>jai_gift</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="/some-url">
              <GiPapers />
              <span>Portfolio</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://wa.me/6285776288381"
            >
              <MdOutlineContactPhone />
              <span>Contact Person</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
