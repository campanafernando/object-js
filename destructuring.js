//exemplo prático da utilização de 'destructuring' em objetos Javascript

var user = [
    {
        nome: 'Fernando',
        idade: 22,
        sexo: 'M',
    },
    {
        nome: 'Mari',
        idade: 20,
        sexo: 'F',
    },
    {
        nome: 'Isabella',
        idade: 16,
        sexo: 'F',
    },
]

var {nome: nomeF1} = user[1] 
console.log(nomeF1)

var {idade, sexo} = user[0]
console.log(idade, sexo)

var pais = {
    Mundo: {
        brancos: 'Russia', 
        negros: 'Etiopia'
    }
}

var {Mundo: {brancos}} = pais
console.log(brancos)