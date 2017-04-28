(function() {
  'use strict';

  /* -- STEP 0 - READING --
    1. Go read the INQStats API blog post and learn how the API we'll be using works.
    http://blog.inqubu.com/inqstats-open-api-published-to-get-demographic-data

    2. Go read this blog post on dependency injection in AngularJS.
    http://anandmanisankar.com/posts/angularjs-dependency-injection-demystified/

    3. Go skim read the Angular Chart documentation.
    http://jtblin.github.io/angular-chart.js/

    4. Briefly read the documentation on the `.map` method in JavaScript.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */

  /* -- STEP 1 - GET AN API KEY FROM INQSTATS --
    Get an API key from INQStats, then paste it as the 2nd parameter to .value on line 27.
    http://blog.inqubu.com/inqstats-open-api-published-to-get-demographic-data.

    Next, open `./charts/inqstats.factory.js`.
  */

  angular
    .module('app', ['chart.js'])
    .value('inqstatsApiKey', 'a63bf05f3a195cc8');
})();
