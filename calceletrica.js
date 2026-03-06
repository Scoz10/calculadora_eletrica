let quantidade = parseInt(prompt("Digite quantos eletrodomesticos voce quer ver o preco: "));
let contador = 0;
while (quantidade > contador) {
  contador++;
  let kilowats, custo, kwhMES;
  let eletro = prompt("Digite o nome do eletrodomestico : ");
  let quilo_whats = parseInt(
    prompt`(1) Se o consumo esta em watts (W)\n(2) Se o consumo esta em Quilo Watts (Kw)\nDigite:  `);
  let consumo = parseFloat(prompt("Digite o consumo do eletro domestico em (W ou KW) : "));
  let horas = parseFloat( prompt(`Digite mais ou menos quantas horas ele fica ligado por dia : `));
  let dias = parseInt(prompt("Digite quantos dias em media ele fica ligado no mes : ") );
  switch (quilo_whats) {
    case 1:
      kilowats = consumo / 1000;
      break;
    case 2:
      kilowats = consumo;
      break;
  }
  kwhMES = kilowats * horas * dias;
  custo = kwhMES * 0.9;
  alert(`O seu eletrodomestico e : ` +eletro +`\nO consumo mensal em Kw/h e : ` + kwhMES.toFixed(2) +"\nSeu gasto total e : R$ :" + custo.toFixed(2));
  console.log(
    `O seu eletrodomestico e : ` +eletro +`\nO consumo mensal em Kw/h e : ` +
      kwhMES.toFixed(2) +"\nSeu gasto total e : R$ :" +custo.toFixed(2));
}
