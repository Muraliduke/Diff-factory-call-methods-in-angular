angularMFRP.service('dataService', function($http, $q) {
    var deferred = $q.defer();
    var city = "",
        cityresult = "",
        totalresult = "",
        searches = "",
        z = [];
    $http.get('data/sample.json').then(function(response) {

        deferred.resolve(response);
        var responseData = response.data;
		angular.forEach(responseData, function(value, index) {
            z.push(index);
        });
    });
    this.cityData = function() {
        return z;
    }
    this.getData = function() {

        return deferred.promise
    }
	this.result = function(a, b, c, d) {
        city = a;
        cityresult = b;
        totalresult = c;
        searches = d;
	}
    this.returncity = function() {

        return city;
    }
    this.returncityresult = function() {
        return cityresult;
    }
    this.returnbothsearch = function() {
        return totalresult;
    }
    this.returnsearches = function() {
        return searches;
    }
});