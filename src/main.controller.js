(function(){
    
    angular
        .module('chummerApp')
        .controller('mainController', mainController);
    
    mainController.$inject = ['$scope','dados'];
    
    function mainController($scope, dados){
        $scope.dados = dados.throwDice(4,6,4,true);
        $scope.reroll = function(){
            $scope.dados = dados.throwDice(4,6,4,true);
        };
    }
    
})();
