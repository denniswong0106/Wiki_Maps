// require('dotenv').config();

const apiKey = process.env.API_KEY;

const initMap = function() {
  const options = {
    zoom: 8,
    center: {
      lat: 49.2827,
      lng: -123.1207
    }
  };
  const map = new google.maps.Map($('#map-container'), options);
};

$(document).ready(function() {





});
