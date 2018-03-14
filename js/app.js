/** Data model */
var Model = [{
        title: 'Joey\'s House of Pizza',
        location: {
            lat: 36.144060,
            lng: -86.742024
        },
        category: 'Pizza',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Fox\'s Donut Den',
        location: {
            lat: 36.105782,
            lng: -86.813194
        },
        category: 'Donut',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Shipley Do-Nuts',
        location: {
            lat: 36.170080,
            lng: -86.676410
        },
        category: 'Donut',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Taco Mamacita',
        location: {
            lat: 36.142692,
            lng: -86.791665
        },
        category: 'Taco',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Mas Tacos',
        location: {
            lat: 36.184765,
            lng: -86.754677
        },
        category: 'Taco',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Oscar\'s Taco',
        location: {
            lat: 36.162960,
            lng: -86.781326
        },
        category: 'Taco',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Woodlands Indian Vegetarian Cuisine ',
        location: {
            lat: 36.137968,
            lng: -86.819720
        },
        category: 'Vegan',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Sunflower Cafe',
        location: {
            lat: 36.113291,
            lng: -86.767839
        },
        category: 'Vegan',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Grins Vegetarian Cafe',
        location: {
            lat: 36.144731,
            lng: -86.806367
        },
        category: 'Vegan',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Five Points Pizza',
        location: {
            lat: 36.177123,
            lng: -86.750496
        },
        category: 'Pizza',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Manny\'s House of Pizza',
        location: {
            lat: 36.164294,
            lng: -86.780118
        },
        category: 'Pizza',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Tavern',
        location: {
            lat: 36.150869,
            lng: -86.797062
        },
        category: 'Brunch',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'The Garden Brunch Cafe',
        location: {
            lat: 36.172862,
            lng: -86.793766
        },
        category: 'Brunch',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'CREMA',
        location: {
            lat: 36.156915,
            lng: -86.769731
        },
        category: 'Coffee',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Bongo Java',
        location: {
            lat: 36.132162,
            lng: -86.795865
        },
        category: 'Coffee',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Ugly Mugs Coffee & Tea',
        location: {
            lat: 36.182201,
            lng: -86.735499
        },
        category: 'Coffee',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Jeni\'s Splendid Ice Creams',
        location: {
            lat: 36.126807,
            lng: -86.789006
        },
        category: 'Icecreame',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Pied Piper Creamery',
        location: {
            lat: 36.176482,
            lng: -86.750300
        },
        category: 'Icecreame',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Bobbie\'s Dairy Dip',
        location: {
            lat: 36.151582,
            lng: -86.851306
        },
        category: 'Icecreame',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Supreme Kreme Rolled Icecream',
        location: {
            lat: 36.127448,
            lng: -86.777872
        },
        category: 'Icecreame',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'King Buffet',
        location: {
            lat: 36.127406,
            lng: -86.712754
        },
        category: 'Buffet',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Aquarium Restaurant',
        location: {
            lat: 36.205323,
            lng: -86.693593
        },
        category: 'Buffet',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    },
    {
        title: 'Arnold\'s Country Kitchen',
        location: {
            lat: 36.151461,
            lng: -86.779595
        },
        category: 'Buffet',
        iconType: '<span class="map-icon map-icon-restaurant"></span>'
    }
];

var map;
var geocoder;
var marker;
var infowindow;
var markers = [];

// alerts the user if Google Maps fails to load
function mapError() {
    alert('Opps.. Google Map fail to load. Please check your internet connection or try again later.');
}

function initMap() {

    //Constructor creates a new map - only center and are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 36.162664,
            lng: -86.781602
        },
        zoom: 12,
        mapTypeControl: false,
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#7A6A66"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#69BF46"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fa982c"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": 4
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e1984f"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#362D2A"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#04bdfb"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ]
    });

    ko.applyBindings(new ViewModel());
}

var ViewModel = function() {

    var self = this;
    self.markerArray = ko.observableArray();
    self.filter = ko.observable('');
    self.showLists = ko.observable(false);
    self.popupList = ko.observable(false);
    self.arrow = ko.observable('img/right-arrow.png');
    self.highlightMarker = ko.observable(false);
    self.filter = ko.observable('');
    self.filter_option = ko.observableArray();
    self.filters = ko.observableArray(["Donut", "Vegan", "Pizza", "Taco", "Brunch", "Coffee", "Buffet", "Icecreame"]);

    function filterType(id, name, image) {
        this.id = ko.observable(id);
        this.Name = ko.observable(name);
        this.image = ko.observable(image);
        this.Selected = ko.observable(false);
    }

    self.init = function() {
        self.filter_option.push(new filterType('donut', 'Donut', 'img/donut.png'));
        self.filter_option.push(new filterType('vegan', 'Vegan', 'img/vegan.png'));
        self.filter_option.push(new filterType('pizza', 'Pizza', 'img/pizza.png'));
        self.filter_option.push(new filterType('taco', 'Taco', 'img/taco.png'));
        self.filter_option.push(new filterType('brunch', 'Brunch', 'img/brunch.png'));
        self.filter_option.push(new filterType('coffee', 'Coffee', 'img/coffee.png'));
        self.filter_option.push(new filterType('buffet', 'Buffet', 'img/buffet.png'));
        self.filter_option.push(new filterType('icecreame', 'Icecreame', 'img/icecreame.png'));
    }();

    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    var markerIcon = {
        url: 'img/marker.svg',
        scaledSize: new google.maps.Size(30, 50),
    };

    var hoverList = {
        url: 'img/highlightedMarker.svg',
        scaledSize: new google.maps.Size(40, 66),
    };

    var highlightedIcon = {
        url: 'img/highlightedMarker.svg',
        scaledSize: new google.maps.Size(30, 50),
    };

    var createMarker = function(place) {
        var marker = new google.maps.Marker({
            map: map,
            title: place.title,
            position: place.location,
            category: place.category,
            icon: markerIcon
        });

        map.fitBounds(bounds);
        self.markerArray().push(marker);
        marker.addListener('click', function() {
            map.setCenter(this.getPosition());
            self.populateInfoWindow(this, infowindow);
            infowindow.open(map, this);
            self.toggleMarker(marker);
        });
        bounds.extend(marker.position);
    };

    Model.forEach(function(location){
        createMarker(location);
    });

    self.populateInfoWindow = function(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.setContent('Loading...');
            infowindow.marker = marker;

            var url = 'https://api.foursquare.com/v2/venues/search?near=nashville,tn&client_id=SYWGR4EL3JFALWCCKHS1KKUTXT3F4OAIINPODW2RXUXREF1Z&client_secret=5UNHNCDD0PL052SRJ4RLHY4MSXURU1FVDZBTBSUN3EJ5IOAI&v=20180311';

            this.htmlContent = '<div>' + '<h4>' + marker.title + '</h4>';
            $.getJSON(url).done(function(marker) {
                var response = marker.response.venues[0];
                self.street = response.location.formattedAddress[0];
                self.city = response.location.formattedAddress[1];

                self.htmlContentFoursquare =
                    '<h5></h5>' + '<div>' +
                    '<p>' + self.street + '</p>' +
                    '<p>' + self.city + '</p>' +
                    '</div> </div>';

                infowindow.setContent(self.htmlContent + self.htmlContentFoursquare);
            }).fail(function() {
                console.log( "Unable get foursquare data for this location");
              });

            infowindow.open(map, marker);

            infowindow.addListener('closeclick', function() {
                map.setCenter(new google.maps.LatLng(36.162664, -86.781602));
                setTimeout(function () {
                    marker.setAnimation(null);
                }, 100);
                infowindow.marker = null;
                marker.setIcon(markerIcon);
            });
        }
    };

    self.visiblePlaces = ko.computed(function() {
        var search = self.filter().toLowerCase();
        return ko.utils.arrayFilter(self.markerArray(), function(item) {
                if (self.filters().indexOf(item.category) > -1) {
                    console.log(self.filters());
                    if (item.title.toLowerCase().indexOf(search) >= 0) {
                        item.setMap(map);
                        return true;
                    } else {
                        item.setMap(null);
                        infowindow.close(map, item);
                        return false;
                    }
                } else {
                    item.setMap(null);
                    infowindow.close(map, item);
                    return false;
                }
        });
    }, self);

    self.toggleMarker = function(place) {
        place.setAnimation(google.maps.Animation.BOUNCE);
        place.setIcon(highlightedIcon);
        setTimeout(function () {
            place.setAnimation(null);
            place.setIcon(markerIcon);
        }, 3000);
    };

    self.markerInfo = function(place) {
        self.populateInfoWindow(place, infowindow);
        map.setCenter(place.getPosition());
        self.toggleMarker(place);
    };

    // self.toggleOn = function(place) {
    //     place.setIcon(hoverList);
    // };

    // self.toggleOut = function(place) {
    //     place.setIcon(markerIcon);
    // };

    self.showList = function() {
        self.showLists(!self.showLists());
        if (!self.showLists()) {
            self.arrow('img/right-arrow.png');
        } else {
            self.arrow('img/left-arrow.png');
        }
    };

    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value));
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            if (ko.unwrap(value)) {
                $(element).fadeIn();
            } else {
                $(element).fadeOut();
            }
        }
    };
};
