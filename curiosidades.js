var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanhoColecao = curiosidades_chuck_norris.length;
var numeroSorteado = Math.floor(Math.random() * tamanhoColecao); 
var curiosidadeEscolhida = curiosidades_chuck_norris[numeroSorteado];
var tituloCuriosidade = curiosidadeEscolhida.titulo;
var conteudoCuriosidade = curiosidadeEscolhida.conteudo;

console.log('-------------------------------------------------------')
console.log('CURIOSIDADES SOBRE CHUCK NORRIS\n')
console.log('Título:' + tituloCuriosidade +'\n')
console.log('Conteúdo:' + conteudoCuriosidade + '\n')