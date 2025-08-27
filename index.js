//DOM = Document Object Model = arvore de todos os elementos no html


function boasVindas() {
    event.target.disabled = true;
    const nomeValue = document.querySelector("#nome").value;
    const conversa = document.querySelector("#conversa");
    conversa.innerHTML += `<h3>Seja bem vindo(a) ${nomeValue}</h3>`;
    motivoDoContato();
}

function motivoDoContato() {
    const conversa = document.querySelector("#conversa");
    setTimeout(function () {
        conversa.innerHTML += `
            <h3>Qual o motivo do seu contato</h3>
            <button onclick="queroComprar()">Quero comprar</button>
            <br>
            <button onclick="precisoDeSuporte()">Preciso de suporte</button>
            <br>
        `
    }, 1000);
}

function queroComprar() {
    const conversa = document.querySelector("#conversa");
    setTimeout(function () {
        conversa.innerHTML += '<h3>Confira nosso catálogo: <a href="https://google.com">Link</a></h3>';
    }, 1000)
}

function precisoDeSuporte() {
    const conversa = document.querySelector("#conversa");
    setTimeout(function () {
        conversa.innerHTML += `
            <h3>Preciso de suporte</h3>
            <button onclick="">Quero resgatar meu produto</button>
            <br>
            <button>Falar com atendente</button>
            <br>
        `;
    }, 1000);
}