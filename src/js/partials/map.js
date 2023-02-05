(() => {
	"use strict";

	const hackSetter = (value) => () => {
		window.name = value;
		history.go(0)
	};

	const appendChild = Element.prototype.appendChild;

	const urlCatchers = [
		"/AuthenticationService.Authenticate?",
		"/QuotaService.RecordEvent?"
	];

	Element.prototype.appendChild = function (element) {
		const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
		const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

		if (!isGMapAccessScript) {
			return appendChild.call(this, element);
		}

		return element;
	};
})();

var mapStyles = [
	{
		"featureType": "all",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"weight": "2.00"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#9c9c9c"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
			{
				"color": "#f2f2f2"
			}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#5d5d5d"
			},
			{
				"weight": "1"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 45
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#0a00ff"
			},
			{
				"weight": "1.00"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#7b7b7b"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [
			{
				"color": "#46bcec"
			},
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#c8d7d4"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#070707"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	}
]

window.addEventListener('load', () => {
	const mapMain = document.getElementById('map');
	if ($('#map').length === 0) {
		return;
	}

	function initMap(el, lat, lng, zoom) {

		const options = {
			center: { lat, lng },
			zoom,
			//disableDefaultUI: true,
			styles: mapStyles
		};

		homepageMapObject = new google.maps.Map(el, options);

		/*const marker = new google.maps.Marker({
			position: { lat, lng },
			map: homepageMapObject,
			icon: {
				url: './images/map_icon_v2.png',
				scaledSize:{
					height: 92,
					width: 74
				},
				anchor: new google.maps.Point(37, 63),
			},
		});*/
	}

	if (mapMain) {
		initMap(mapMain, 65.061313, 101.477485, 3);
	}
});