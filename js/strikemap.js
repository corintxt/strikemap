const mymap = L.map('mapid').setView([40.712, -74.00], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'corintxt/ck9nkn56f065c1jn0af088eyp',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY29yaW50eHQiLCJhIjoiY2s5bmtidmpuMDBxdDNmbmswczQ3N3ZqdiJ9.0JbVmngSJZPqam6fdktxaw'
}).addTo(mymap);

//from https://stackoverflow.com/questions/22538473/leaflet-center-popup-and-marker-to-the-map
//https://dirkmjk.nl/en/144/embedding-tweets-in-leaflet-popups
mymap.on('popupopen', function(e) {
    $.getScript("https://platform.twitter.com/widgets.js");
    var px = mymap.project(e.popup._latlng);
    px.y -= e.popup._container.clientHeight;
    mymap.panTo(mymap.unproject(px),{animate: true});
});

var strikes = [
    {"lat": 40.64701, "lon": -74.9, "html":'<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What&#39;s the best ~3min exercise sequence to do to wake yourself up after sitting for a while? Jumping jacks maybe? Jogging on the spot? A vinyasa flow?</p>&mdash; Corin Faife (@corintxt) <a href="https://twitter.com/corintxt/status/1255934624083120131?ref_src=twsrc%5Etfw">April 30, 2020</a></blockquote>'},
    {"lat": 40.34701, "lon": -74, "html":'<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What&#39;s the best ~3min exercise sequence to do to wake yourself up after sitting for a while? Jumping jacks maybe? Jogging on the spot? A vinyasa flow?</p>&mdash; Corin Faife (@corintxt) <a href="https://twitter.com/corintxt/status/1255934624083120131?ref_src=twsrc%5Etfw">April 30, 2020</a></blockquote>'},
    {"lat": 41.34701, "lon": -73.5, "html":'This one is not a tweet <a href="https://twitter.com/corintxt/status/1255934624083120131?ref_src=twsrc%5Etfw">April 30, 2020</a>'}
];

// add markers at locations specified in strikes array
var marker = (function() {
    for (let index = 0; index < strikes.length; index++) {
        L.marker([strikes[index].lat, strikes[index].lon])
        .bindPopup(strikes[index].html, {maxWidth: 215})
        .addTo(mymap);
    }
})(); 

