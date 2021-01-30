import React from "react";

import "./Footer.css";

function Footer(props) {
  return (
    <div className="Footer">
      <p>
        Pixel art by Eric Alloway (
        <a href="https://twitter.com/iscaneus">@Iscaneus</a>).
      </p>

      <p>
        Fire salamander photo by Cristo Vlahos.{" "}
        <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>
      </p>
    </div>
  );
}

export default Footer;
