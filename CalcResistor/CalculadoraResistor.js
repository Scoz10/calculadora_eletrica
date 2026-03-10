/*Imput : se é 4 ou 5 faixas
input : faixa 1 , 2 , 3 , 4 , 5
*/
const faixasNormal = {
    PRETO: 0,
    MARROM: 1,
    VERMELHO: 2,
    LARANJA: 3,
    AMARELO: 4,
    VERDE: 5,
    AZUL: 6,
    ROXO: 7,
    CINZA: 8,
    BRANCO: 9,
};
const tolerancia = {
    MARROM: 1,
    VERMELHO: 2,
    BRANCO: 20,
    DOURADO: 5,
    PRATA: 10,
};
const multiplicador = {
    PRETO: 1,
    MARROM: 10,
    VERMELHO: 100,
    LARANJA: 1000,
    AMARELO: 10000,
    VERDE: 100000,
    AZUL: 1000000,
    BRANCO: 1000000000,
    DOURADO: 0.1,
    PRATA: 0.01,
};

console.log(`
(PRETO) para preto
(MARROM) para marrom
(VERMELHO) para vermelho
(LARANJA) para laranja
(AMARELO) para amarelo
(VERDE) para verde
(AZUL) para azul
(ROXO) para roxo
(CINZA) para cinza
(BRANCO) para branco
(DOURADO) para dourado
(PRATA) para prata`);

let qtdFaixas = parseInt(
    prompt(`Digite a quantidade de faixas que o resistor possui :
(4) para resistores com 4 faixas
(5) para resistores com 5 faixas`)
);

let faixaCompleta = 0,
    faixaMultiplicada = 0,
    ToleranciaMinima = 0,
    ToleranciaMaxima = 0;
switch (qtdFaixas) {
    case 4:
        let faixa1 = prompt(`Digite a cor da faixa 1 :`);
        let faixa2 = prompt(`Digite a cor da faixa 2 :`);
        let faixa3 = prompt(`Digite a cor da faixa 3 :`);
        let faixa4 = prompt(`Digite a cor da faixa 4 :`);
        faixaCompleta = faixasNormal[faixa1] * 10 + faixasNormal[faixa2];
        faixaMultiplicada = faixaCompleta * multiplicador[faixa3];
        ToleranciaMinima = faixaMultiplicada * (1 - tolerancia[faixa4] / 100);
        ToleranciaMaxima = faixaMultiplicada * (1 + tolerancia[faixa4] / 100);
        break;
    case 5:
        let faixa11 = prompt(`Digite a cor da faixa 1 :`);
        let faixa22 = prompt(`Digite a cor da faixa 2 :`);
        let faixa33 = prompt(`Digite a cor da faixa 3 :`);
        let faixa44 = prompt(`Digite a cor da faixa 4 :`);
        let faixa55 = prompt(`Digite a cor da faixa 5 :`);
        faixaCompleta = faixasNormal[faixa11] * 100 + faixasNormal[faixa22] * 10 + faixasNormal[faixa33];
        faixaMultiplicada = faixaCompleta * multiplicador[faixa44];
        ToleranciaMinima = faixaMultiplicada * (1 - tolerancia[faixa55] / 100);
        ToleranciaMaxima = faixaMultiplicada * (1 + tolerancia[faixa55] / 100);
}
alert("O seu resistor varia de " + ToleranciaMinima.toFixed(2) + " a " + ToleranciaMaxima + " Ohm\nPorem seu numero fixo é :  " + faixaMultiplicada.toFixed(2) + " Ohm");
console.log("O seu resistor varia de " + ToleranciaMinima + " a " + ToleranciaMaxima.toFixed(2) + " Ohm\nPorem seu numero fixo é :  " + faixaMultiplicada.toFixed(2) + " Ohm");
