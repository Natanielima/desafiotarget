
const numeroDigitado= document.getElementById("numeroDigitado");
const botao = document.getElementById("botao");
const texto=document.getElementById("informativoSeConsta");


botao.addEventListener('click', ()=>{

    function verificarFibonacci(numero) {
        // Definição dos dois primeiros números da sequência
        let anterior = 0
        let atual = 1
      
        // Loop para calcular a sequência até o número informado ou até um número maior que ele
        while (atual <= numero) {
          // Verifica se o número informado está na sequência e retorna verdadeiro se sim
          if (atual == numero) {
            return true
          }
      
          // Calcula o próximo número da sequência
          const proximoNumero = anterior + atual
      
          // Atualiza os valores das variáveis para o próximo cálculo
          anterior = atual
          atual = proximoNumero
        }
      
        // Se o número informado não pertence à sequência, retorna falso
        return false
      }
    
      const numeroVerificar = numeroDigitado.value
    
      if (numeroVerificar >= 0) {
        // Verifica se o número informado pertence à sequência e exibe mensagem correspondente
        if (verificarFibonacci(numeroVerificar)) {
          texto .innerHTML=`<h1>${numeroVerificar} pertence à sequência de Fibonacci.</h1>`
        } else {
          texto.innerHTML=`<h1>${numeroVerificar} não pertence à sequência de Fibonacci.</h1>`
        }
      } else {
        console.log('Por favor, informe um número inteiro positivo.')
      }
      numeroDigitado.value=''
    

}   )







