function escolherFruta(fruta){
    const resposta = document.querySelector("#resposta");
    resposta.innerHTML = `Você escolheu a fruta: ${fruta}` 
}

function boasVindas(nome){
    const mensagem = document.querySelector("#mensagem");
    mensagem.innerHTML = `Seja bem vindo ${nome}`;
}

function cadastrar(){
    event.preventDefault();
    const form = document.querySelector("#cadastro");
    const dadosDoFormulario = new FormData(form);
    const dados = Object.fromEntries(dadosDoFormulario.entries());

    console.log(dados);
}

function desconto(){
    alert("Epa epa epa, pra aew");
}

function inserirDiv(){
    // let div = document.createElement("div");
    // div.classList.add("bg-black", "text-white");
    // div.innerHTML = `<h6>Alguma coisa</h6>`;

    // const divs = document.querySelector("#divs");
    // divs.append(div);

    const divs = document.querySelector("#divs");
    let div = `
        <div class="bg-black text-white">
            <h6>Alguma coisa</h6>
        </div>
    `;
    divs.innerHTML += div;
}

function mostrarAlerta(mensagem = "a mensagem não foi informada"){
    const alerta = document.querySelector("#alerta");
    alerta.classList.remove("invisible", "opacity-0");
    alerta.innerHTML = mensagem;
    setTimeout(() => {
        alerta.classList.add("invisible", "opacity-0");
    }, 3000)
}