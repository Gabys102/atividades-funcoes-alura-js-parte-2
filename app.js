//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//O Índice de Massa Corporal (IMC) é uma medida internacional, adotada pela OMS, que avalia se uma pessoa está no peso ideal em relação à sua altura ( Ref.https://www.tuasaude.com/imc/)
function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  console.log("IMC:", imc.toFixed(2));
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log("Fatorial de 5:", fatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80 (sonho)
function converterDolar(valorDolar) {
  let cotacao = 4.80;
  let valorReal = valorDolar * cotacao;

  return valorReal;
}

console.log("Valor em reais:", converterDolar(10));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function salaRetangular(largura, altura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);

  console.log("Área:", area);
  console.log("Perímetro:", perimetro);
}


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function salaCircular(raio) {
  let pi = 3.14;

  let area = pi * (raio * raio);
  let perimetro = 2 * pi * raio;

  console.log("Área:", area);
  console.log("Perímetro:", perimetro);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  let i = 1;

  while (i <= 10) {
    console.log(numero + " x " + i + " = " + (numero * i));
    i++;
  }
}







