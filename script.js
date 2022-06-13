precoP=0;
precoB=0;
precoS=0;
nomeP=0;
nomeB=0;
nomeS=0;
function selecionar1(elemento) {
    const pratoescolhido = document.querySelector(".selecionadoP");
    if (pratoescolhido !== null) {
      pratoescolhido.classList.remove("selecionadoP");
      document.querySelector(".escondido1").classList.remove("escondido1");
    }
    elemento.classList.add("selecionadoP");
    elemento.querySelector(".verif").classList.toggle("escondido1");
    nomeP=elemento.childNodes[3].innerHTML
    precoP=elemento.childNodes[7].childNodes[1].innerHTML

    precoP=convertor(precoP)
    liberarbotao()

  }

  function selecionar2(elemento) {
    const bebidacolhida = document.querySelector(" .selecionadoB");
    if (bebidacolhida !== null) {
        bebidacolhida.classList.remove("selecionadoB");
        document.querySelector(".escondido2").classList.remove("escondido2");
    }

    elemento.classList.add("selecionadoB");
    elemento.querySelector(".verif").classList.toggle("escondido2");
    nomeB=elemento.childNodes[3].innerHTML
    precoB=elemento.childNodes[7].childNodes[1].innerHTML

    precoB=convertor(precoB)
    liberarbotao()

  }

  function selecionar3(elemento) {
    const sobremesacolhida = document.querySelector(" .selecionadoS");
    if (sobremesacolhida !== null) {
        sobremesacolhida.classList.remove("selecionadoS");
        document.querySelector(".escondido3").classList.remove("escondido3");
    }

    elemento.classList.add("selecionadoS");
    elemento.querySelector(".verif").classList.toggle("escondido3");
    nomeS=elemento.childNodes[3].innerHTML
    precoS=elemento.childNodes[7].childNodes[1].innerHTML

    precoS=convertor(precoS)
    liberarbotao()

  }
  function convertor(elemento){
    let valor = "";
    for(let i=0; i<elemento.length; i++) {
      if (Number(elemento[i])===0||Number(elemento[i])===1||Number(elemento[i])===2||Number(elemento[i])===3||Number(elemento[i])===4||Number(elemento[i])===5||Number(elemento[i])===6||Number(elemento[i])===7||Number(elemento[i])===8||Number(elemento[i])===9){
        valor = valor + Number(elemento[i])
      }
 
      }
    return Number(valor/100);
}


  function final(){
    if(precoP*precoB*precoS!==0){
      console.log(precoP*precoB*precoS)
      const tudo="R$";
      const valorF=(precoP+precoB+precoS).toFixed(2);
      let wpp= `Olá, gostaria de fazer o pedido:\n
      -Prato:${nomeP}\n
      -Bebida:${nomeB}\n
      -Sobremesa:${nomeS}\n
      Total:${tudo}${valorF}`;
      wpp = "https://wa.me/5535991705604?text=" + encodeURIComponent(wpp)
      window.location.href=wpp;
      console.log(2)
  }
}


  function liberarbotao(){
    if(Number(precoP)*Number(precoB)*Number(precoS)!==0){
      document.querySelector("buttom").innerHTML="Fechar pedido"
      document.querySelector("buttom").classList.add("liberarB")
    }
  }