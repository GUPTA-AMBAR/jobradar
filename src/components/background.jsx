import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    // Load the full tsParticles package
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#1e1e2f", // Set background color
      },
    },
    particles: {
      number: {
        value: 150, // Number of snow particles
        density: {
          enable: true,
          area: 800, // Density area for particles
        },
      },
      color: {
        value: "#ffffff", // Snow color
      },
      shape: {
        type: "circle", // Snow particle shape
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: 4, // Snow particle size
        random: true,
      },
      move: {
        enable: true,
        speed: 1, // Snow falling speed
        direction: "bottom", // Snow falling direction
        outModes: {
          default: "out",
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default Background;
