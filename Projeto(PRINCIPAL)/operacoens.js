//Funcao para calculo de consumo
function CalcConsumo() {
  let quantidade = parseInt(
    prompt(`===============================
    CALCULADORA DE CONSUMO ELÉTRICO
    ===============================
    
    Quantos eletrodomésticos
    você deseja calcular?
    
    Digite a quantidade:`)
  );
  let contador = 0;
  let taxa = parseFloat(
    prompt(`Digite o valor da tarifa de energia
    (R$ por KWh):`)
  );
  let kilowats = 0,
    custo = 0,
    kwhMES = 0;
  gastoTotal = 0;
  while (quantidade > contador) {
    contador++;
    let eletro = prompt("Digite o nome do eletrodomestico : ");
    let quilo_whats = parseInt(
      prompt(`O consumo informado está em:

        1 - Watts (W)
        2 - Quilowatts (KW)
        
        Digite a opção:`)
    );
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
    alert(
      `===============================
        RESULTADO DO CÁLCULO
        ===============================
        
        Eletrodoméstico:` +
        eletro +
        "\nO consumo mensal em Kw/h e : " +
        kwhMES.toFixed(2) +
        "\nSeu gasto total e : R$ :" +
        custo.toFixed(2)
    );

    console.log(
      `===============================
        RESULTADO DO CÁLCULO
        ===============================
        
        Eletrodoméstico:` +
        eletro +
        "\nO consumo mensal em Kw/h e : " +
        kwhMES.toFixed(2) +
        "\nSeu gasto total e : R$ :" +
        custo.toFixed(2)
    );
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

  let unidade = prompt(`===============================
    CONVERSOR DE UNIDADES
    ===============================

    Digite a unidade:

    A → Corrente elétrica (Ampère)
    V → Tensão elétrica (Volt)
    Ω → Resistência elétrica (Ohm)
    W → Potência elétrica (Watt)

    Digite:`);

  let primeiroPrefixo = prompt(`Prefixo do VALOR DE ENTRADA:

    G → Giga
    M → Mega
    k → Quilo
    base → Sem prefixo
    mili → Mili
    micro → Micro
    nano → Nano
    
    Digite:`);
  let segundoPrefixo = prompt(`Prefixo para CONVERSÃO:

    G → Giga
    M → Mega
    k → Quilo
    base → Sem prefixo
    mili → Mili
    micro → Micro
    nano → Nano
    
    Digite:`);

  let quantidade1 = parseFloat(prompt("Digite o valor que deseja converter : "));

  let valorNaBase = quantidade1 * prefixos[primeiroPrefixo];
  let resultadoFinal = valorNaBase / prefixos[segundoPrefixo];

  if (segundoPrefixo == "base") {
    segundoPrefixo = "";
  }
  if (primeiroPrefixo == "base") {
    primeiroPrefixo = "";
  }

  alert(
    `===============================
    RESULTADO DA CONVERSÃO
    ===============================\n` +
      quantidade1 +
      primeiroPrefixo +
      unidade +
      ` Equivalem a : ` +
      resultadoFinal +
      " " +
      segundoPrefixo +
      unidade
  );

  console.log(
    `===============================
    RESULTADO DA CONVERSÃO
    ===============================\n` +
      quantidade1 +
      primeiroPrefixo +
      unidade +
      ` Equivalem a : ` +
      resultadoFinal +
      " " +
      segundoPrefixo +
      unidade
  );
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

  console.log(`===============================
    TABELA DE CORES DO RESISTOR
    ===============================

    PRETO
    MARROM
    VERMELHO
    LARANJA
    AMARELO
    VERDE
    AZUL
    ROXO
    CINZA
    BRANCO
    DOURADO
    PRATA`);

  let qtdFaixas = parseInt(
    prompt(`===============================
        CALCULADORA DE RESISTOR
        ===============================
        
        Quantas faixas possui?
        
        4 → Resistor de 4 faixas
        5 → Resistor de 5 faixas
        
        Digite:`)
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
  alert(
    `===============================
    RESULTADO DO RESISTOR
    ===============================
    
    Valor nominal:` +
      faixaMultiplicada.toFixed(2) +
      "\nVariação : " +
      ToleranciaMinima.toFixed(2) +
      " a  " +
      ToleranciaMaxima.toFixed(2) +
      " Ohm"
  );
  console.log(
    `===============================
    RESULTADO DO RESISTOR
    ===============================
    
    Valor nominal:` +
      faixaMultiplicada.toFixed(2) +
      "\nVariação : " +
      ToleranciaMinima.toFixed(2) +
      " a  " +
      ToleranciaMaxima.toFixed(2) +
      " Ohm"
  );
}

// prettier-ignore-end

function LeiOhm() {
  let escolha = parseInt(
    prompt(`================================
    CALCULADORA LEI DE OHM 
================================

O que você deseja descobrir?

1 → Tensão (V) 
2 → Corrente (I) 
3 → Resistência (R) 

================================

Digite a opção desejada:`)
  );
  let amper = 0,
    volt = 0,
    resistencia = 0,
    resposta = 0;
  switch (escolha) {
    case 1:
      resistencia = parseFloat(prompt(`Digite a Resistência (Ohm):`));
      amper = parseFloat(prompt(`Digite a Corrente (Ampere):`));

      volt = resistencia * amper;
      resposta = volt;
      break;
    case 2:
      volt = parseFloat(prompt(`Digite a Tensão (Volts):`));
      resistencia = parseFloat(prompt(`Digite a Resistência (Ohm):`));

      amper = volt / resistencia;
      resposta = amper;
      break;
    case 3:
      amper = parseFloat(prompt(`Digite a Corrente (Ampere):`));
      volt = parseFloat(prompt(`Digite a Tensão (Volts):`));
      resistencia = volt / amper;
      resposta = resistencia;
      break;
  }
  console.log(
    `================================
    RESULTADO:
================================

Grandeza calculada:` + resposta
  );

  alert(
    `================================
  RESULTADO:
================================

Grandeza calculada:` + resposta
  );
}
