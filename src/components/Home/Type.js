import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: "2.2em", fontWeight: "600" }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "blue",
          cursorClassName: "blue"
        }}
      />
    </div>
  );
}

export default Type;
