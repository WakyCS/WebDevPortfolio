const mediaButtons = document.querySelectorAll('.media-button');
const everything = document.querySelectorAll( 'body *' );

mediaButtons.forEach(mediaButton => {
    var on = false;
    mediaButton.addEventListener('click', () => {
        if (mediaButton.id != 'mail' && mediaButton.id != 'lightModeToggle'){
            window.location.href = mediaButton.id;
        } else {
            if (mediaButton.id == 'mail'){
                window.location.href = 'mailto:wakycs@gmail.com';
            } else {
                if (!on) {
                    mediaButton.src = 'Images/LightMode.png';
                    everything.forEach(element => {
                        element.classList.remove('darkmode');
                        element.classList.add('lightmode');
                    });
                    document.body.style.background = "linear-gradient(45deg, rgba(200, 200, 200, 1), rgba(180, 180, 180, 1))";
                    on = true;
                } else {
                    mediaButton.src = 'Images/DarkMode.png';
                    everything.forEach(element => {
                        element.classList.remove('lightmode');
                        element.classList.add('darkmode');
                    });
                    document.body.style.background = "linear-gradient(45deg, rgba(60, 60, 60, 1), rgba(50, 50, 50, 1))";
                    on = false
                }
            }
        }
    });
});

particlesJS('particles', {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.2,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: '#ffffff',
        opacity: 0.4,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: 'repulse',
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
});