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
        //      - bang: boolean si true expande los 6, se vuelven a tirar y se suman si hay exito.
        //      - tipo de dado (def. d6)
        //      - num para éxito (def 4)
        //      - botch system ( undef: no botch, true: botch si mas de mitad de 1s)
        //      -
        // retorna objeto
        //      - dice: array de resultados
        //      - exitos: si hay un num para contarlos
        //      - botch: true si hay pifia
        function throwDice (dice,bang, kind, exito, botch){
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
            bang = bang || false;
            kind = kind || 6;
            exito = exito || 4;
            botch = botch || true;
            if (botch === true){
                botch = Math.round(dice / 2);
            }
            
            while (dice-- > 0 ){
                var dado = Math.floor(Math.random()*kind)+1;
                result.dice.push(dado);
                if (dado >= exito) result.exitos +=1;
                if ((dado === kind) && bang){
                    var extra = Math.floor(Math.random()*kind)+1;
                    if (extra >= exito) result.exitos +=1;
                    result.dice.push(extra);
                }
                if (dado === 1) unos += 1;
            }
            if ((unos >= botch) && (result.exitos === 0)){
                result.botch = true;
            }
            return result;
        }
    }
})();
