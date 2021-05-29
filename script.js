const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Navigation bar Toggle
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("open");
});

// GOOGLE MAP
let map;

function initMap() {
    const myLocation = { lat: 47.15422307338977, lng: 27.599574419300005 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: myLocation,
      zoom: 15,
    });
    const marker = new google.maps.Marker({
        position: myLocation,
        map: map,
    }); 
}

// SCROLL TOP
(function scrollTop(){
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0,0);
  });
})();