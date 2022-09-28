var user = [
{
    nome: 'Fernando',
    idade: 22,
    prof: 'programador',

},
{
    nome: 'Mari',
    idade: 20,
    prof: 'atendente'
}
]

var props = (Object.keys(user))
console.log(props)

/*for convencional
for (i = 0; i < user.length; i++){  
    
    console.log(user[props[i]])  //este log percorrido pelo for imprime o conteúdo dos dois índices contidos na array => esta quantidade foi obtida através do método Object.Keys
}

for (var cont of props){
    console.log(user[cont])  
    
    este 'for' é próprio para percorrer o indice do array "utilizando of", sendo assim é um log mais simples (basta usar a variável que vai percorrer a array, neste caso: cont)
}*/

for (var cont in props){
    if (user.hasOwnProperty(cont)) //o método hasOwnProperty garante que o conteúdo impresso não será de nenhuma propriedade herdada
    console.log(user[cont])
}
