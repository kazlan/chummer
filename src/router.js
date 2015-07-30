angular
    .module('chummerApp')
    .config(['$routeprovider',
        function($routeProvider){
            $routeProvider.
                when('/',{
                    templateUrl: 'views/main.html',
                    controller: 'mainController'
                })
                .when('/personajes',{
                    templateUrl: 'views/personajes.html',
                    controller: 'personajesController'
                })
                .otherwise({
                    redirectTo: '/'
                });
            
        }]);
