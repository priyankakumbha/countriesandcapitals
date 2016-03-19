angular.module('cacDataServices', [])
    .factory('countryRepository', [
        '$http', '$route', function($http, $route) {

            return ({
                getCountryList: getCountryList,
                getCountry: getCountry,
                getNeighbourList: getNeighbourList,
                getCapitalDetails: getCapitalDetails
            });

            function getCountryList() {
                var url = "http://api.geonames.org/countryInfoJSON?username=priyakum";
                var request = $http.get(url, { cache: true });
                return (request.then(handleSuccess, handleError));
            };

            function getCountry() {
                var url = "http://api.geonames.org/countryInfoJSON?username=priyakum&country=" + $route.current.params.countryCode;
                 console.log("Country Code"+ $route.current.params.countryCode)
                 var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            function getNeighbourList() {
                var url = "http://api.geonames.org/neighboursJSON?username=priyakum&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            function getCapitalDetails() {
                var url = "http://api.geonames.org/searchJSON?formatted=true&username=priyakum&q=capital&&style=full&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };
              function handleError(response) {

                // The API response from the server should be returned in a
                // normalized format. However, if the request was not handled by the
                // server (or what not handles properly - ex. server error), then we
                // may have to normalize it on our end, as best we can.
                if (!angular.isObject(response.data) ||
                    !response.data.message) {
                    throw("An unknown error occurred.");
                }

                // Otherwise, use expected error message.
                throw(response.data.message);
            }

            // Transform the successful response, unwrapping the application data
            // from the API response payload.
            function handleSuccess(response) {
                return (response.data);
            }
             }
    ]);