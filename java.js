// Espera o site carregar completamente para não dar erro
document.addEventListener('DOMContentLoaded', function() {
    
    const slider = document.getElementById('billRange');
    const displayConta = document.getElementById('billValue');
    const displayResultado = document.getElementById('totalResult');
    const waLink = document.getElementById('waLink');

    // CONFIGURAÇÃO: Coloque seu número aqui
    const seuTelefone = "43999299182"; 

    function atualizar() {
        if(!slider || !waLink) return; // Segurança caso os IDs mudem

        const valor = parseFloat(slider.value);
        const multiplicador = 2.223; 
        const resultado = valor * multiplicador;

        displayConta.innerText = valor.toLocaleString('pt-BR');
        displayResultado.innerText = resultado.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });

        // Monta o link do WhatsApp
        const mensagem = encodeURIComponent(`Olá! Minha conta é R$ ${valor} e vi que posso recuperar R$ ${resultado.toFixed(2)}. Quero uma análise!`);
        waLink.href = `https://api.whatsapp.com/send?phone=${seuTelefone}&text=${mensagem}`;
    }

    // Ativa o movimento do slider
    slider.addEventListener('input', atualizar);
    
    // Roda a primeira vez
    atualizar();
});