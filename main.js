var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 51.0486, lng: -114.0708 },
		zoom: 10.5
	});
}