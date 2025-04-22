class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    printInfo() {
        console.log(`Animal: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`);
    }
}


class Cachorro extends Animal {
    #raca;

    constructor(nome, idade, especie, raca) {
        super(nome, idade, especie);
        this.#raca = raca;
    }

    printInfo() {
        console.log(`Cachorro: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}, Raça: ${this.#raca}`);
    }
}


class Gato extends Animal {
    constructor(nome, idade, especie, cores) {
        super(nome, idade, especie);
        this.cores = cores;
    }

    printInfo() {
        console.log(`Gato: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}, Cores: ${this.cores.join(", ")}`);
    }
}


const animal = new Animal("Tartaruga", 100, "Réptil");
const cachorro = new Cachorro("Lucky", 5, "Mamífero", "Golden Retriever");
const gato = new Gato("Harry", 3, "Felino", ["branco", "preto", "cinza"]);


animal.printInfo();
cachorro.printInfo();
gato.printInfo();