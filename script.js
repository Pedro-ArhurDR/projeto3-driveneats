
function selecionar1(elemento) {

    const pratoescolhido = document.querySelector(".selecionado");
    if (pratoescolhido !== null) {
      pratoescolhido.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
  }

  function selecionar2(elemento) {
    const bebidacolhida = document.querySelector(" .bebida .selecionado");
    if (bebidacolhida !== null) {
        bebidacolhida.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
  }

  function selecionar3(elemento) {
    const sobremesacolhida = document.querySelector(" .sobremesa .selecionado");
    if (sobremesacolhida !== null) {
        sobremesacolhida.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
  }