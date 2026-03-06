# calculadora_eletrica
Calculadora eletrica.

Fazer um bom README é essencial para valorizar o seu portfólio no GitHub. Ele funciona como a "vitrine" do seu projeto, explicando o que ele faz e como usá-lo.Aqui está uma sugestão completa e bem estruturada para o seu código:

⚡ Calculadora de Consumo Elétrico Mensal : Este é um script simples em JavaScript desenvolvido para ajudar usuários a estimarem o consumo de energia (em kWh) e o custo financeiro mensal de seus eletrodomésticos.

🚀 Como funciona : O programa utiliza janelas de interação (prompt e alert) no navegador para coletar dados do usuário. Ele permite calcular múltiplos aparelhos em uma única execução.Para cada eletrodoméstico, o script solicita:O nome do aparelho.A unidade de medida da potência (Watts ou Kilowatts).O valor da potência.A média de horas de uso por dia.Quantos dias o aparelho fica ligado no mês.

🧮 A Lógica de Cálculo : O script utiliza as seguintes fórmulas matemáticas para chegar aos resultados:Conversão de Unidade (se necessário):$$kW = \frac{W}{1000}$$Consumo Mensal:$$kWh_{mês} = kW \times \text{horas/dia} \times \text{dias/mês}$$Custo Estimado (Baseado em R$ 0,90 por kWh):$$\text{Custo} = kWh_{mês} \times 0.90$$🛠️ Tecnologias UtilizadasJavaScript (ES6+): Lógica principal, manipulação de variáveis e estruturas de repetição.Web Browser: Ambiente de execução (Console e Interface de Alerta).

📖 Como Executar : Você não precisa instalar nada para testar este código:Copie o código do arquivo script.js.Abra o seu navegador (Chrome, Edge, Firefox).Aperte F12 para abrir as Ferramentas do Desenvolvedor.Vá na aba Console.Cole o código e aperte Enter.

📝 Exemplo de Uso : Ao rodar o script, você verá algo como:Entrada: Geladeira, 400W, 24h por dia, 30 dias no mês.Saída do Alert:O seu eletrodomestico e : GeladeiraO consumo mensal em Kw/h e : 288.00Seu gasto total e : R$ : 259.20