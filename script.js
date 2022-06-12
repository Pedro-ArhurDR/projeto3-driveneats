
function selecionar1(elemento) {
    const pratoescolhido = document.querySelector(".selecionadoP");
    if (pratoescolhido !== null) {
      pratoescolhido.classList.remove("selecionadoP");
      document.querySelector(".escondido1").classList.remove("escondido1");
    }

    elemento.classList.add("selecionadoP");
    elemento.querySelector(".verif").classList.toggle("escondido1");
  }

  function selecionar2(elemento) {
    const bebidacolhida = document.querySelector(" .selecionadoB");
    if (bebidacolhida !== null) {
        bebidacolhida.classList.remove("selecionadoB");
        document.querySelector(".escondido2").classList.remove("escondido2");
    }

    elemento.classList.add("selecionadoB");
    elemento.querySelector(".verif").classList.toggle("escondido2");
  }

  function selecionar3(elemento) {
    const sobremesacolhida = document.querySelector(" .selecionadoS");
    if (sobremesacolhida !== null) {
        sobremesacolhida.classList.remove("selecionadoS");
        document.querySelector(".escondido3").classList.remove("escondido3");
    }

    elemento.classList.add("selecionadoS");
    elemento.querySelector(".verif").classList.toggle("escondido3");
  }