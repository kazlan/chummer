angular
    .module('chummerApp')
    .config(['$routeProvider',
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
                .when('/combate',{
                    templateUrl: 'views/combate.html',
                    controller: 'combateController'
                })
                .when('/historia',{
                    templateUrl: 'views/historia.html',
                    controller: 'historiaController'
                })
                .otherwise({
                    redirectTo: '/'
                });
            
        }]);
