import Pokemon from "./pokemon";

export default class PrimalPokemon extends Pokemon {
    private orb: string

    constructor(orb: string){

        let name: string
        let type: string
        let level: number

        if(orb.toUpperCase() == 'AZUL'){
            name = 'Kyogre Primigenio';
            type = 'Agua';
            level = 100;

        }else if(orb.toUpperCase() == 'ROJO'){
            name = 'Groudon Primigenio';
            type = 'Fuego/Tierra';
            level = 100;
        }
        else{
            name = 'Indefinido';
            type = 'Indefinido';
            level = 5;
        }
        super(name, type, level)
        this.orb = orb
    }

    attack(): void {
        console.log(`El pokemon está realizando un super ataque primigenio!`);
    }
}