/*var usuario = {
    digaOi(name){
        return `Olá ${name}`
    }
}

console.log(usuario.digaOi('Fernando'))

var cor = 'azul'

var usuario2 = {
    nome: 'Fernando',
    cor: cor
};

console.log(`${usuario2.nome} gosta de ${usuario2.cor}`)*/

var dados = {
    nome: 'Fernando',
    idade: 22
}

var extraDados = {
    altura: '2 metros',
    peso: 100
}
//a variavel novousuario recebe através do método Object.assign() o conteúdo dos dois primeiros objetos "dados" e "extraDados" e faz a união entre eles
var novousuario = Object.assign({}, dados, extraDados)
console.log(`${novousuario.nome} tem ${novousuario.idade} anos, possui uma altura de ${novousuario.altura} e seu peso é ${novousuario.peso} quilos.` )
