/** Data model */
var Model = [{
        title: 'Joey\'s House of Pizza',
        location: {
            lat: 36.144060,
            lng: -86.742024
        }
    },
    {
        title: 'Monell\'s Dining & Catering',
        location: {
            lat: 36.175806,
            lng: -86.790297
        }
    },
    {
        title: 'Etch Restaurant',
        location: {
            lat: 36.159187,
            lng: -86.775021
        }
    },
    {
        title: 'Skull\'s Rainbow Room',
        location: {
            lat: 36.164496,
            lng: -86.779043
        }
    },
    {
        title: 'Mas Tacos',
        location: {
            lat: 36.184765,
            lng: -86.754677
        }
    },
    {
        title: 'Mission BBQ',
        location: {
            lat: 36.2045447,
            lng: -86.691572
        }
    },
    {
        title: 'Hattie B\'s Hot Chicken',
        location: {
            lat: 36.151475,
            lng: -86.796620
        }
    },
    {
        title: 'Kayne Prime',
        location: {
            lat: 36.155684,
            lng: -86.785955
        }
    },
    {
        title: 'Pancake Pantry',
        location: {
            lat: 36.137024,
            lng: -86.800537
        }
    }
];

var ViewModel = function() {
    var self = this;
    var map;

    self.markerArray = ko.observableArray();
    self.filter = ko.observable('');

    var initMap = function() {
        //Constructor creates a new map - only center and are required.
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 36.174465,
                lng: -86.767960
            },
            zoom: 13,
            mapTypeControl: false,
            disableDefaultUI: true,
            gestureHandling: 'cooperative'
        });

        var geocoder = new google.maps.Geocoder();
        var largeInfowindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();

        var highlightedMarker = 'img/marker.png';
        // Adds a marker to the map and push to the array.
        for (var i = 0; i < Model.length; i++) {
            var marker = new google.maps.Marker({
                position: Model[i].location,
                title: Model[i].title,
                img: Model[i].img,
                // icon: 'img/marker.svg',
                animation: google.maps.Animation.DROP
            });
            self.markerArray.push(marker);
            bounds.extend(marker.position);
        
            marker.addListener('click', function() {
                map.setCenter(marker.getPosition());
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedMarker);
            });
            marker.addListener('mouseout', function() {
                this.setIcon();
            });
        

        map.fitBounds(bounds);

        // This function populates the infowindow when the marker is clicked. We'll only allow
        // one infowindow which will open at the marker that is clicked, and populate based
        // on that markers position.
        function populateInfoWindow(marker, infowindow) {
            // Check to make sure the infowindow is not already opened on this marker.
            infowindow.marker = marker;
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
                map.setCenter(bounds.getCenter());
                map.fitBounds(bounds);
            });

            geocoder.geocode({
                'location': marker.position
            }, function(results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        map.setZoom(13);
                        var address = results[0].formatted_address;
                        var splitAddress = address.split(',');

                        infowindow.setContent('<p class="title text-center">' + marker.title + '<p>' +
                            '<p class="address text-center">' + splitAddress[0] + ',</p>' +
                            '<p class="address text-center">' + splitAddress[1] + ', ' + splitAddress[2] + '</p>');
                    }
                }
            });
            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
            map.panTo(marker.position);
        }
    }();

    self.visiblePlaces = ko.dependentObservable(function() {
        var search = self.filter().toLowerCase();
        return ko.utils.arrayFilter(self.markerArray(), function(marker) {
            if (marker.title.toLowerCase().indexOf(search) >= 0) {
                marker.setMap(map);
                return marker;
            } else {
                marker.setMap(null);
            }
        });
    }, self);

    /*
    credit: https://github.com/Sentry71/neighborhood-map/blob/master/js/app.js
    */
    self.selectList = function(item) {
        google.maps.event.trigger(item, 'click');
    };
};

ko.applyBindings(new ViewModel());
