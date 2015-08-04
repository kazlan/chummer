(function(){
angular
    .module('chummerApp')
    .controller('personajesController', personajesController);

    personajesController.$inject = ['$scope','character'];

    function personajesController($scope, character){
        
        $scope.actualChar = null;
        $scope.personajesAll = character.getAll();
        
        $scope.guarda_char = function (){
            console.log('click');
            character.save({
                nombre: "Perico Palotes",
                jugador: "GM",
                fuerza: 4
                });
        };
        $scope.remove_char = function(id){
            console.log(id);
            //character.remove(id);
            $scope.actualChar = id;
        };

        $scope.new_ficha = function() {
            console.log('lala');
            $scope.actualChar = character.nuevo();
        };
    }
})();
