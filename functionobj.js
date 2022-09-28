var user = {
    nome: 'Fernando',
    idade: 22,
    sexo: 'M',
}

function imprimeUser({nome, idade}){
    console.log(nome)
    console.log(idade)
}

imprimeUser(user)
console.log(Object.keys(user)) //o método Object.keys traz as propriedades do objeto em forma de array

console.log(Object.values(user))//o método Object.values traz o conteúdo das propriedades de um objeto em formato de array