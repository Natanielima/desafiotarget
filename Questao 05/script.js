const string = document.getElementById("string");
const botao = document.getElementById("botao");
const revertido = document.getElementById("revertido")

botao.addEventListener('click', (evento)=>{
    evento.preventDefault();

    const str = string.value

    var derivandoString = str.split("")

    var revertendoSring = derivandoString.reverse();

    var juntandoString = revertendoSring.join("")
    
    revertido.innerHTML= `A palavra que você quis reverter ficou assim: ${juntandoString}`;

   string.value=''
})

const i = 13
const soma =0
const outra =0

while (outra<i) {
    outra=outra+1;
    soma=soma+outra
}
console.log(soma)
