// MAP SCRIPT
var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();

// API FETCH
const apiKey = "at_y0Ff1nJ7vJaxJAr2mBiiV6o1k7cKw";
let ipAddress = document.getElementById('ip-address');
// ipAddress = "";
const myLocation = document.getElementById('location');
const timeZone = document.getElementById('timezone');
const isp = document.getElementById('isp');

fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    ipAddress.innerHTML = data.ip;
    myLocation.innerHTML = data.location.city;
    timeZone.innerHTML = data.location.timezone;
    isp.innerHTML = data.isp;
  })
  .catch(error => console.error("Error fetching IP info:", error));

