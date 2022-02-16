const btnBuscar = document.querySelector("[data-buscar]");
const resposta = document.querySelector("[data-resposta]");

btnBuscar.addEventListener("click", buscar);

function buscar(el) {
  el.preventDefault();
  resposta.innerHTML = `<div> </div>`;
  const cep = document.querySelector("[data-cep]").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((r) => {
      return r.json();
    })
    .then((cep) => {
      html(cep);
    });

  function html(cep) {
    const rua = document.createElement("li");
    rua.innerText = `Logradouro: ${cep.logradouro}`;

    const bairro = document.createElement("li");
    bairro.innerText = `Bairro: ${cep.bairro}`;

    const cidade = document.createElement("li");
    cidade.innerText = `Cidade: ${cep.localidade}`;

    const uf = document.createElement("li");
    uf.innerText = `Estado: ${cep.uf}`;

    const resultado = document.createElement("ul");
    resultado.appendChild(rua);
    resultado.appendChild(bairro);
    resultado.appendChild(cidade);
    resultado.appendChild(uf);

    resposta.appendChild(resultado);
    resposta.classList.add("ativo");
  }
}

export default function initBuscar() {}
