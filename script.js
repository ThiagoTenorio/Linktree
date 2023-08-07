const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value);
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const vernizsim = document.getElementById('vernizsim').checked;
  const acabamentosim = document.getElementById('acabamentosim').checked;
  const ilhosim = document.getElementById('ilhossim').checked;


  // CALCULO M²:
  const metroQuadrado = largura * altura;

  let valorTotal = metroQuadrado * valor;


  // VALIDAÇÃO:
  if (valor <= 0 || largura <= 0 || altura <= 0) {
    document.getElementById('resultado').innerHTML =
      "Por favor, insira <b>valores válidos</b> maiores que zero.";
    return;
  }

  // CALCULO E RETORNO VERNIZ:
  let verniz = 0;

  if (metroQuadrado < 1) {
    verniz = metroQuadrado * 10;
  } else {
    verniz = Math.trunc(metroQuadrado) * 10;
  }

  if (vernizsim) {
    valorTotal += verniz;
    document.getElementById('vernizValor').innerHTML = `<hr>+ R$ ${verniz.toFixed(2)}`;
  } else {
    document.getElementById('vernizValor').innerHTML = '';
  }



  // CALCULO E RETORNO BANNER:
  if (acabamentosim) {
    const acabamentoValor = calcularAcabamentoValor(largura);
    valorTotal += acabamentoValor;
    document.getElementById('acabamentoValor').innerHTML = `<hr>+ R$ ${acabamentoValor.toFixed(2)}`;
  } else {
    document.getElementById('acabamentoValor').innerHTML = '';
  }

  function calcularAcabamentoValor(largura) {
    let acabamentoValor = 0;

    if (largura > 0 && largura <= 1) {
      acabamentoValor += 5;
    } else if (largura > 1 && largura <= 1.5) {
      acabamentoValor += 7;
    } else if (largura > 1.5) {
      acabamentoValor += 20;
    }

    return acabamentoValor;
  }

  // CALCULO E RETORNO DA VULCANIZAÇÃO E ILHOS:
  const metroLinear = (largura * 2) + (altura * 2);
  const cm = metroLinear * 100;

  function calcularValorIlhos(cm) {
    const valorPorIntervalo = 1.50;
    const intervalos = Math.floor(cm / 40)

    const valorAdicional = intervalos * valorPorIntervalo;
    return valorAdicional.toFixed(2);
  }

  const ilhos = metroLinear * 5;
  const valorIlhos = parseFloat(calcularValorIlhos(cm));
  const ilhosVulcanizado = ilhos + valorIlhos
  if (ilhosim) {
    valorTotal += ilhosVulcanizado;
    document.getElementById('ilhosValor').innerHTML = `<hr>V : R$${ilhos.toFixed(2)}, 
    I : R$${valorIlhos.toFixed(2)}<br>`;
  } else {
    document.getElementById('ilhosValor').innerHTML = '';
  }

  // RETORNO DO RESULTADO FINAL:

  document.getElementById('resultado').innerHTML = `Área Total: ${metroQuadrado.toFixed(2)} m²<br>
  Área Linear: ${metroLinear.toFixed(2)} eme
  <hr><h3>Valor total: R$ ${valorTotal.toFixed(2)}</h3>`;
});
