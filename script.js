const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value);
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const vernizsim = document.getElementById('vernizsim').checked;
  const acabamentosim = document.getElementById('acabamentosim').checked;

  const metroQuadrado = largura * altura;

  let valorTotal = metroQuadrado * valor;

  if (valor <= 0 || largura <= 0 || altura <= 0) {
    document.getElementById('resultado').innerHTML =
      "Por favor, insira <b>valores válidos</b> maiores que zero.";
    return;
  }

  const verniz = Math.trunc(metroQuadrado) * 10;
  if (vernizsim) {
    valorTotal += verniz;
    document.getElementById('vernizValor').innerHTML = `+ R$ ${verniz.toFixed(2)}`;
  } else {
    document.getElementById('vernizValor').innerHTML = '';
  }

  if (acabamentosim) {
    const acabamentoValor = calcularAcabamentoValor(metroQuadrado);
    valorTotal += acabamentoValor;
    document.getElementById('acabamentoValor').innerHTML = `+ R$ ${acabamentoValor.toFixed(2)}`;
  } else {
    document.getElementById('acabamentoValor').innerHTML = '';
  }

  document.getElementById('resultado').innerHTML = `Área total: <b>${metroQuadrado.toFixed(2)} m²</b><br>Valor total: R$ <b>${valorTotal.toFixed(2)}</b>`;
});

function calcularAcabamentoValor(metroQuadrado) {
  let acabamentoValor = 0;

  if (metroQuadrado > 0 && metroQuadrado <= 1) {
    acabamentoValor += 5;
  } else if (metroQuadrado > 1 && metroQuadrado <= 1.5) {
    acabamentoValor += 7;
  } else if (metroQuadrado > 1.5) {
    acabamentoValor += 20;
  }

  return acabamentoValor;
}

