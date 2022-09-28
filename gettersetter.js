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
    {
        nome: 'Fulano',
        idade: 30,
        sexo: 'M'
    }
]

var userpos = {
    pos: 0,
    get posatual(){
        return user[this.pos]
    },
    get proximo(){
        return user[++this.pos]
    },
    get anterior(){
        return user[--this.pos]
    }
}

console.log(userpos.posatual)
userpos.proximo
console.log(userpos.posatual)
userpos.proximo
console.log(userpos.posatual)
userpos.anterior
console.log(userpos.posatual)
userpos.anterior
console.log(userpos.posatual)
