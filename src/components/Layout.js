import React from "react";
import Header from "../components/Header";
import Particles from "../components/Particles"


 function Layout(props){
  const paramConfig = {
    particles: {
      number: {
          value: 123,
          density: {
              enable: true,
              value_area: 1920
          }
      },
      line_linked: {
          enable: true,
          opacity: 0.2
      },
      move: {
          direction: "up",
          speed: 0.5
      },
      size: {
          value: 0
      },
      opacity: {
          anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.1
          }
      }
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "bubble"
          }
      },
      modes: {
          bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
          },
          repulse: {
              distance: 400,
              duration: 4
          }
      }
  },
  retina_detect: true
  };
  return (
    <div className="mi-wrapper">
      <Particles params={paramConfig} />
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
