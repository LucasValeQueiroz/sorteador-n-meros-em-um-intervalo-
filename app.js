//Variáveis universais: Botão reiniciar e botão sortear
let botao = document.getElementById('btn-reiniciar');
let botaoSortear = document.getElementById('btn-sortear');
function sortear(){
    //Se botão sortear estiver desabilitado mas se não
    if (botaoSortear.classList.contains('container__botao-desabilitado')){
        //Já sorteou, logo temos que reiniciar para sortear novamente
        alert ('Reinicie para sortear novos números');
    }else{
        //Pegando informações do usuario: Quantidade, de e até 
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);
        //Declarando variáveis: Array sortados que vai conter quantidade valores sorteados e numero;
        let sorteados = [];
        let numero;
        //Loop para sortear quantidade de números
        for (let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de,ate);
            //Verificando se o número sorteado já foi sorteado
            while (sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de,ate);
            }
            //Colocando o número sorteado no array sorteados
            sorteados.push(numero);
        }
        //Colocando os números sorteados no resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
        alterarStatusBotao();

    }
}
 function obterNumeroAleatorio(min, max){
    //Número  aleatório entre min e max
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function alterarStatusBotao(){
    //Se o botão reiniciar estiver desativado (if) mas se não (else)
    if (botao.classList.contains('container__botao-desabilitado')){
        //Desativando o botão sortear e ativando o botão reiniciar
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');        
    } else{
        //Ativando o botão sortear e desativando o botão reiniciar
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
 }

 function reiniciar() {
    //Se o botão reiniciar esta desativado(if) mas se não(else) 
    if (botao.classList.contains('container__botao-desabilitado')){
        alert('Sorteie um número para reiniciar');
    }else{ 
        //Zerando quantidade, de e ate. Tirando o resultado, voltando para o padrão inicial 
        document.getElementById('quantidade').value='';
        document.getElementById('de').value='';
        document.getElementById('ate').value='';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        //Inverte novamente o botão
        alterarStatusBotao();
    }
}