(function() {
  'use strict';

  angular
    .module('app')
    .factory('inqstatsFactory', inqstatsFactory);

  inqstatsFactory.$inject = ['$http', 'inqstatsApiKey',];

  /* @ngInject */
  function inqstatsFactory($http, inqstatsApiKey) {
    var service = {
      getData: getData
    };

    return service;

    function getData(data) {
      var url = `http://inqstatsapi.inqubu.com/?api_key=${inqstatsApiKey}&countries=us&data=${data}`;

      return $http
        .get(url)
        .then(function(response) {
          return response.data[0]; // Brownie point if you can explain the use of array indexing here.
        });
    }
  }
})();
