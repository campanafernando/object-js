var dados = {
    nome: 'Fernando',
    sobrenome: 'Campana',
}

var extradados = {
    nomemeio: 'Costantin',
    nomefim: 'Felipe',
}


var unidados = {
    ...dados,
    ...extradados,
    nacio: 'Brasileiro',
    natu: 'Uberlandense',
    
}

console.log(unidados)

