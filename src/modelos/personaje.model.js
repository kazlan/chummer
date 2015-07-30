personaje = function(nombre){
    
    this.nombre= nombre || 'john doe';
    this.jugador= 'GM';
    this.atributos =  {
        body: 2,
        agility: 2,
        reaction: 2,
        strength: 2,
        charisma: 2,
        intuition: 2,
        logic: 2,
        willpower: 2,
        edge: 2,
        essence: 6,
        init: 4,
        matrix_init: 2,
        astral_init: 2,
        magic: 0
    };
    this.phys= 8;
    this.mental= 8;
    this.saldo= 0;
    this.karma= 0;
};
