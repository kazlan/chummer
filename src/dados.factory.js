(function(){
    'use strict';
    
    angular
        .module('chummerApp')
        .factory('dados', dadosFactory);
    
    function dadosFactory(){
        var service = {
            throwDice: throwDice
        };
        
        return service;
        
        /////////////////////////
        // lanzamiento de dados
        // params:
        //      - numero de dados
        //      - tipo de dado (def. d6)
        //      - num para éxito (def 4)
        //      - botch system ( null: nada, num: numero de 1s para botch)
        //      -
        // retorna objeto
        //      - dice: array de resultados
        //      - exitos: si hay un num para contarlos
        //      - botch: true si hay pifia
        function throwDice (dice, kind, exito, botch){
            var result = {
                dice: [],
                exitos: 0,
                botch: false
            };
            var unos = 0;
            // Chequeamos parámetros  y lanzamos errores si hace falta.
            if (!dice || (dice < 0 ) || (dice > 30)){
                result.error= "El número de dados es incorrecto";
                return result;
            }
            kind = kind || 6;
            exito = exito || 4;
            botch = botch || false;
            
            while (dice-- > 0 ){
                result.dice.push(Math.floor(Math.random()*kind)+1);
            }
            angular.forEach(result.dice, function(valor){
                if (valor >= exito){
                  result.exitos += 1;
                }
                if (valor === 1){
                    unos += 1;
                }
            });
            if (unos >= botch){
                result.botch = true;
            }
            return result;
        }
    };
})();
