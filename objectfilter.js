var users = [
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
    {
        nome: 'Fulano',
        idade: 30,
        sexo: 'M'
    }
]

let ftusers = users.filter(element => element.idade > 21 && element.sexo == 'M')
console.log(ftusers)
