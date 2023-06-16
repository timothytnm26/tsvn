/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: particleOptions.js
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

export const heroOptions = {
  autoPlay: true,

  fullScreen: {
    enable: true,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 50,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 100,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: "var(--speak-now-6)",
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#fff",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
        maxValue: 0.2,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "images",
      images: [
        {
          src: "src/assets/imgs/sp2.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        // {
        //   src: "src/assets/imgs/dragon.svg",
        //   width: 100, // Adjust the width of the image
        //   height: 100,
        //   // Adjust the height of the image
        // },
        {
          src: "src/assets/imgs/buf0.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        {
          src: "src/assets/imgs/buf1.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        {
          src: "src/assets/imgs/buf2.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        {
          src: "src/assets/imgs/buf3.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        {
          src: "src/assets/imgs/buf4.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
        {
          src: "src/assets/imgs/buf5.svg",
          width: 100, // Adjust the width of the image
          height: 100,
          // Adjust the height of the image
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 25,
        maxValue: 50,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    lineLinked: {
      blink: true,
      color: {
        value: "#ffffff",
      },
      consent: true,
      distance: 100,
      enable: false,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
