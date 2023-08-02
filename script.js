const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value);
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const vernizsim = document.getElementById('vernizsim').checked;


  const metroQuadrado = largura * altura;

  let valorTotal = metroQuadrado * valor;

  if (valor <= 0 || largura <= 0 || altura <= 0) {
    document.getElementById('resultado').innerHTML = "Por favor, insira <b>valores válidos</b> maiores que zero.";
    return;
  }
  const verniz = metroQuadrado * 10;
  if (vernizsim) {
    valorTotal = verniz + valorTotal;
  }

  document.getElementById('vernizValor').innerHTML = `+ R$ ${verniz.toFixed(2)}`;

  document.getElementById('resultado').innerHTML = `Área total: <b>${metroQuadrado.toFixed(2)} m²</b><br>Valor total: R$ <b>${valorTotal.toFixed(2)}</b>`
});