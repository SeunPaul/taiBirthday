var timer = document.querySelector(".timer");


var birthday = new Date(2020, 4, 9, 0, 0, 0).getTime()
tick = ()=>{ 
	var now = new Date().getTime(); 
	var time = birthday - now; 
	var days = Math.floor(time / (1000 * 60 * 60 * 24)); 
	var hours = Math.floor((time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
	var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
	var seconds = Math.floor((time % (1000 * 60)) / 1000);
	timer.innerHTML = days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds ";
	    if (time < 0) { 
	        clearInterval(x); 
	        timer.innerHTML = "HAPPY BIRTHDAY"; 
	    } 
}
var x = setInterval(tick, 1000); 




particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 400
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);