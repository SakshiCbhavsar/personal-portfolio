import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

const ParticlesBackground = () => {
  useEffect(() => {
    (async () => {
      await loadPolygonMaskPlugin(Particles);
    })();
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          links: {
            blink: false,
            color: "random",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.3,
            width: 0.5
          },
          move: {
            enable: true,
            outModes: "bounce",
            speed: { min: 0.5, max: 1 }
          },
          number: {
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: false
            },
            random: false,
            value: { min: 0.05, max: 1 }
          },
          shape: {
            type: "circle"
          },
          size: {
            animation: {
              enable: false,
              speed: 40,
              sync: false
            },
            random: true,
            value: { min: 0.1, max: 1 }
          }
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: "#fff",
              width: 0.3,
              opacity: 0.2
            }
          },
          move: {
            radius: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 0.5,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg"
        }
      }}
    />
  );
};

export default ParticlesBackground;
