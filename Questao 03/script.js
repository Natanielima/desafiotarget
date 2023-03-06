async function listaValoresMaioresQue0(){
    const conexao = await fetch("/dados.json");
    const conexaoConvertida = await conexao.json();

    const maxTexto = document.getElementById("max");
    const minTexto = document.getElementById("min");
    const mediaTexto = document.getElementById("media");

    const diasFaturados = conexaoConvertida.filter(dias=>dias.valor>0);
    const valorTotal =diasFaturados.reduce((anterior, atual)=>anterior+atual.valor,0);

    console.log(valorTotal);

    const min = diasFaturados.reduce((a,b)=>{
        if(b.valor < a.valor) a = b;
        return a;
     });

     minTexto.innerHTML=`O valor mínimo faturado foi de R$ ${new Intl.NumberFormat('de-DE').format(min.valor.toFixed(2))}`
     
     console.log(min.valor);

     const max = diasFaturados.reduce((a,b)=>{
        if(b.valor > a.valor) a = b;
        return a;
     });

     maxTexto.innerHTML=`O valor máximo faturado em um dia foi de R$ ${new Intl.NumberFormat('de-DE').format(max.valor.toFixed(2))}`
     
     console.log(max.valor);

     const mediaFaturamento = valorTotal/(diasFaturados.length)
     console.log(mediaFaturamento);

     const diasAcimaDaMedia = diasFaturados.filter(valor=>valor.valor>mediaFaturamento);

     console.log(diasAcimaDaMedia.length);
     mediaTexto.innerHTML=`A empresa teve ${diasAcimaDaMedia.length} dias acima da média de faturamento que foi de R$ ${new Intl.NumberFormat('de-DE').format(mediaFaturamento.toFixed(2))}`
         
}

listaValoresMaioresQue0();

