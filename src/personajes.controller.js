(function(){
angular
    .module('chummerApp')
    .controller('personajesController', personajesController);

    personajesController.$inject = ['$scope','character'];

    function personajesController($scope, character){
        
        var currentChar = {
            nombre: "Perico Palotes",
            jugador: "GM",
            fuerza: 4
        }
        $scope.guarda_char = function (currentChar){
            console.log('click');
            character.save(currentChar);
        }
    }
})();
