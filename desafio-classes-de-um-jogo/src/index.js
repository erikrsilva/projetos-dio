// Definindo a classe Hero em nomenclatura PascalCase
class Hero {
    // Construtor da classe Hero, inicializa as propriedades nome, idade e tipo
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    // Método "attack", define o tipo de ataque com base na propriedade "type" do heró
    attack(){
        // Variável para armazenar o tipo de ataque
        let attack;

        //Switch case para determinar o ataque baseado no tipo do herói
        switch (this.type){
            case 'mago':
                attack = "usou magia";
                break
            case 'guerreiro':
                attack = "usou espada";
                break
            case 'monge':
                attack = "usou artes marciais";
                break
            case 'ninja':
                attack = "usou shuriken";
                break
            default: "realizou um ataque";
        }
    console.log(`Ao atacar, o ${this.type} ${attack}`); //adaptando texto com o desafio para fazer sentido
    }
}


// Criando input de instâncias da classe Hero com diferentes tipo sde propriedades
let hero1 = new Hero("Invoker", 30, "mago");
let hero2 = new Hero("Wraith King", 500, "guerreiro");
let hero3 = new Hero("Chen", 70, "monge");
let hero4 = new Hero("Riki", 50, "ninja");

// chamada do método "attack" para exemplificar cada instância de herói.
hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();
