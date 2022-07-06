// Crie um objeto que receba ao menos três propriedades sobre você.

let dados = { nome: "João Felipe", idade: 10000, endereço: "RJ",}

console.log(dados)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.esporte = "Basquete"

console.log(dados)

// Remova uma propriedade desse objeto.

delete dados.idade
console.log(dados)

//Mostre no console todas as propriedades desse objeto.

console.log(dados)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "joão pedro",
        idade: 17,
        Estado: "RJ",
        amigos: ["joão felipe", "fabio", "lucas", "daniel",] 
    },{
        nome: "fabio",
        idade: 18,
        Estado: "RJ",
        amigos: ["joão felipe", "clara", "lucas", "rammos",] 
    },{
        nome: "caio",
        idade: 20,
        Estado: "RJ",
        amigos: ["joão felipe", "lucas", "andre", "carlos",] 
    },{
        nome: "Boca",
        idade: 22,
        Estado: "RJ",
        amigos: ["maria", "isadora", "felipe", "daniel",] 
    },
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])