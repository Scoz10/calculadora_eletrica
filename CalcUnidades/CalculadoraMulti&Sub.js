let unidade = prompt(`Digite qual unidade voce deseja utilizar:
Corrente elétrica → A (Ampère)
Tensão elétrica → V (Volt)
Resistência elétrica → Ω (Ohm)
Potência elétrica → W (Watt)`)
let quantidade = parseFloat(prompt(`Digite o valor da grandeza na unidade base para transformalo em mini :`))
let conversao = quantidade * 1000
alert(quantidade + ` ` + unidade + ` representam : ` + conversao + ` m` + unidade )
console.log(quantidade + ` ` + unidade + ` representam : ` + conversao + ` m` + unidade )