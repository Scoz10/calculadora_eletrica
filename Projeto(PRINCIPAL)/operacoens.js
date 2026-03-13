//Funcao para calculo de consumo

function CalcConsumo() {
    let quantidade = parseInt(prompt("Digite quantos eletrodomesticos voce quer ver o preco: "));
    let contador = 0;
    let taxa = parseFloat(prompt("Digite o valor da taxa por KWh R$ : "));
    let kilowats = 0,
        custo = 0,
        kwhMES = 0;
    gastoTotal = 0;
    while (quantidade > contador) {
        contador++;
        let eletro = prompt("Digite o nome do eletrodomestico : ");
        let quilo_whats = parseInt(prompt`(1) Se o consumo esta em watts (W)\n(2) Se o consumo esta em Quilo Watts (Kw)\nDigite:  `);
        let consumo = parseFloat(prompt("Digite o consumo do eletro domestico em (W ou KW) : "));
        let horas = parseFloat(prompt(`Digite mais ou menos quantas horas ele fica ligado por dia : `));
        let dias = parseInt(prompt("Digite quantos dias em media ele fica ligado no mes : "));
        switch (quilo_whats) {
            case 1:
                kilowats = consumo / 1000;
                break;
            case 2:
                kilowats = consumo;
                break;
        }
        kwhMES = kilowats * horas * dias;
        custo = kwhMES * taxa;
        gastoTotal += custo;
        alert(`O seu eletrodomestico e : ` + eletro + `\nO consumo mensal em Kw/h e : ` + kwhMES.toFixed(2) + "\nSeu gasto total e : R$ :" + custo.toFixed(2));
        console.log(`O seu eletrodomestico e : ` + eletro + `\nO consumo mensal em Kw/h e : ` + kwhMES.toFixed(2) + "\nSeu gasto total e : R$ :" + custo.toFixed(2));
    }
    console.log(`O seu gasto total mensal e : ` + gastoTotal);
}

function ConversorUnidade() {
    const prefixos = {
        G: 10 ** 9,
        M: 10 ** 6,
        k: 10 ** 3,
        base: 10 ** 0,
        mili: 10 ** -3,
        micro: 10 ** -6,
        nano: 10 ** -9,
    };

    let unidade = prompt(`Digite qual unidade voce deseja utilizar:
    Corrente elétrica → A (Ampère)
    Tensão elétrica → V (Volt)
    Resistência elétrica → Ω (Ohm)
    Potência elétrica → W (Watt)`);

    let primeiroPrefixo = prompt(`Prefixo do VALOR DE ENTRADA
        (G) para giga
        (M) para Mega
        (k) para Quilo
        (base) Para um valor sem prefixo
        (mili) Para Mili
        (micro) Para Micro
        (nano) Para nano
        `);
    let segundoPrefixo = prompt(`Prefixo para o QUAL DESEJA CONVERTER:
        (G) para giga
        (M) para Mega
        (k) para Quilo
        (base) Para um valor sem prefixo
        (mili) Para Mili
        (micro) Para Micro
        (nano) Para nano
        `);

    let quantidade1 = parseFloat(prompt("Digite a quantidade que voce quer transformar : "));

    let valorNaBase = quantidade1 * prefixos[primeiroPrefixo];
    let resultadoFinal = valorNaBase / prefixos[segundoPrefixo];

    if (segundoPrefixo == "base") {
        segundoPrefixo = "";
    }
    if (primeiroPrefixo == "base") {
        primeiroPrefixo = "";
    }

    alert(quantidade1 + primeiroPrefixo + unidade + ` Equivalem a : ` + resultadoFinal + " " + segundoPrefixo + unidade);
    console.log(quantidade1 + primeiroPrefixo + unidade + ` Equivalem a : ` + resultadoFinal + " " + segundoPrefixo + unidade);
}

function CalcResistendia() {
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
}
