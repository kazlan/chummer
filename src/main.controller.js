(function(){
    
    angular
        .module('chummerApp')
        .controller('mainController', mainController);
    
    mainController.$inject = ['$scope','character'];
    
    function mainController($scope, character){
        
        $scope.player1 = character.nuevo();
        $scope.dados = $scope.player1.tirarDados(4,true);
        
        $scope.reroll = function(){
            $scope.dados = $scope.player1.tirarDados(4,true);
        };
    }
    
})();
