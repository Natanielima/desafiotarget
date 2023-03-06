const faturamentoEstados =[
    { nome: 'SP',
      valor: 67836.43
    },
    {
        nome: 'RJ',
        valor: 36678.66 
    },
    {
        nome: 'MG',
        valor: 29229.88 
    },
    {
        nome: 'ES',
        valor: 27165.48 
    },
    {
        nome: 'Outros',
        valor: 19849.53 
    }
];

const valorTotal = faturamentoEstados.reduce((anterior,atual)=> anterior+atual.valor,0);

faturamentoEstados.forEach((item)=>{
    item.valor= ((item.valor/valorTotal)*100).toFixed(2)
});

console.log(faturamentoEstados);





const textoPercentual = document.getElementById("percentual")

faturamentoEstados.forEach((item)=>{
    document.getElementById(item.nome).innerHTML=`O valor percentual do ${item.nome} é de ${item.valor}%`
})