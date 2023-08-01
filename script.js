// const form = document.getElementById('form');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const largura = document.getElementById('largura').value;
//   const altura = document.getElementById('altura').value;
//   const valor = document.getElementById('valor').value;

//   const areaTotal = (largura * altura).toFixed(2);
//   const valorTotal = (areaTotal * valor).toFixed(2);

//   const metroQuadrado = document.getElementById('metro-quadrado');
//   const valorFinal = document.getElementById('valor-final');

//   if ()

// })

function calcularValorTotal() {
  const valor = parseFloat(document.getElementById('valor').value);
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);

  const metroQuadrado = largura * altura;
  const valorTotal = metroQuadrado * valor;

  if (isNaN(valor) || isNaN(largura) || isNaN(altura) || valor <= 0 || largura <= 0 || altura <= 0) {
    document.getElementById('resultado').innerHTML = "Por favor, insira <b>valores válidos</b> maiores que zero.";
    return;
  }
  document.getElementById('resultado').innerHTML = `Área total: ${metroQuadrado.toFixed(2)}</br>
  Valor total: ${valorTotal.toFixed(2)}`;

}