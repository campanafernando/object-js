//testes com objetos e atribuição de conteúdo

var usuario = {
    nome: 'Fernando',
    idade: '22',
    profissao: 'programador'
}

console.log(typeof(usuario))
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.profissao)

delete usuario.idade;
console.log(usuario);

usuario.hobbies = ['Música', 'Codar', 'Futebol']
console.log(usuario);

usuario.competencias = {
    linguagens: ['Javascript', 'Python', 'C#', 'C++'],
    instrumentos: ['Piano', 'Violão', 'Viola']
}

console.log(usuario.competencias.linguagens[2])

