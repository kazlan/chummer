(function(){
angular.module('chummerApp')
    .factory('character', characterFactory);

    characterFactory.$inject = ['dados','$firebaseArray'];
    
    function characterFactory(dados, $firebaseArray){
        
        var ref = new Firebase('https://chummer.firebaseio.com/personajes');
        var fbPersonajes = $firebaseArray(ref);
        
        var factory = {
            nuevo: new_char,
            save: save_char,
            getAll: getAll,
            remove: remove
        };
        return factory;
    
        ////////////// Implementaciones /////////////
    
        function new_char(){
            var char = new personaje();
            char.tirarDados = dados.throwDice;
            return char;
        }
        
        function getAll(){
            return fbPersonajes;
        }
        
        function save_char(ficha){
            fbPersonajes.$add(ficha);
        }
        function remove(ficha){
            fbPersonajes.$remove(ficha);
            console.log(ficha + "removed");
        }
    }
    
})();

/* scrapbook
pretendemos que desde el controller podamos hacer
player = character.load("perico") y player tenga atribs, monitores, y funciones de dados, init y tal

character ha de tener una manera de inicializarse
con un objeto 'personaje' que ha de tener el esquema.
El modelo lo podemos pedir desde un form o crear un char basico
que casi sería lo mejor

*/
