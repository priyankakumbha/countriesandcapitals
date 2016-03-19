angular.module('cacApp')
    .controller('CountriesCtrl', ['$scope', 'countryRepository',
        function($scope, countryRepository) {
            countryRepository.getCountryList()
                .then(function(result) {
                    $scope.countries = result.geonames;
                });
        }
    ]);