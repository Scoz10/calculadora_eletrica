let opcao = parseInt(
    prompt(`Qual calculadora voce deseja usar :
(1) -> Calculadora do consumo de um eletrodomestico por mes 
(2) -> Conversor de unidades
(3) -> Calculadora de Ohm de um resistor
Digite :`)
);

switch (opcao) {
    case 1:
        CalcConsumo();
        break;
    case 2:
        ConversorUnidade();
        break;
    case 3:
        CalcResistendia();
        break;
}
