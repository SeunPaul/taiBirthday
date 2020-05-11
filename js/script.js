var timer = document.querySelector(".timer");
var before = document.querySelector(".bBirthday");
var after = document.querySelector(".aBirthday");


var birthday = new Date(2020, 4, 11, 1, 32, 0).getTime()
tick = ()=>{ 
	var now = new Date().getTime(); 
	var time = birthday - now; 
	var days = Math.floor(time / (1000 * 60 * 60 * 24)) > 9 ? Math.floor(time / (1000 * 60 * 60 * 24)) : "0"+Math.floor(time / (1000 * 60 * 60 * 24)); 
	var hours = Math.floor((time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)) > 9 ? Math.floor((time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)) : "0"+Math.floor((time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
	var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) > 9 ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) : "0"+Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
	var seconds = Math.floor((time % (1000 * 60)) / 1000) > 9 ? Math.floor((time % (1000 * 60)) / 1000) : "0"+Math.floor((time % (1000 * 60)) / 1000);
	timer.innerHTML = days + "\t:\t" + hours + "\t:\t" + minutes + "\t:\t" + seconds ;
	    if ((time/1000) < 1) { 
	        clearInterval(x); 
	        before.style.display = "none";
          after.style.display = "block";
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
    }
  }

);
