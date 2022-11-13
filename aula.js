// Criar uma classe chamada Pessoa
// Essa classe possui as propriedades primeiroNome, sobrenome, idade e pets
// Essa classe tem o método adotar que recebe uma instancia de pet e adiciona na lista de pets

// Criar uma classe chama Animal
// Essa classe possui as propriedades nome, idade, especie

// Crie
// 1- Uma pessoa chamada Luna
// 2- Um coelho chamado José
// 3- Adicione o coelho josé na lista de pets de Luna
// 4- Crie um gato chamado Kuro
// 5- Adicione Kuro na lista de pets da Luna

class Pessoa {
    constructor(primeiroNome, sobrenome, idade){
        this.primeiroNome = primeiroNome
        this.sobrenome = sobrenome
        this.idade = idade
        this.pets = []
    }

    adotar(pet){
        return pet instanceof Animal ? this.pets.push(pet) : console.log("Não foi possível adotar o pet.")
    }
}

class Animal{
    constructor(nome, idade, especie){
        this.nome = nome
        this.idade = idade
        this.especie = especie
    }
}

let Shiro = new Animal("Shiro", 3, "Gatinho")

let Luna = new Pessoa("Luna", "Tupini", 25)
let Batata = "Sou uma batata"
Luna.adotar(Shiro)
console.log(Luna)
let José = new Animal("José", 2, "Coelhinho")
let Kuro = new Animal("Kuro", 5, "Gatinho")
Luna.adotar(José)
Luna.adotar(Kuro)
Luna.adotar(Batata)
console.log(Luna)