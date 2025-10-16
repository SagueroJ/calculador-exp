var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

// Cache the visor element to avoid repeated DOM lookups
var visorCache = null;
function visor() {
  if (visorCache && visorCache.value !== undefined) return visorCache;
  visorCache = document.getElementById("visor");
  return visorCache;
}

function preencher(numero) {
  var aux = visor().value;
  if (aux == "0") {
    visor().value = numero;
  } else {
    visor().value += numero;
  }
}

// Função para zerar o visor
function zerar() {
  visor().value = 0;
  valor1 = "";
  operador = "";
}

function operacao(sinal) {
  if (valor1 == "") {
    operador = sinal;
    valor1 = parseFloat(visor().value);
    visor().value = "";
  } else {
    switch (operador) {
      case "+":
        operador = sinal;
        valor2 = visor().value;
        valor1 = parseFloat(valor1) + parseFloat(valor2);
        visor().value = valor1;
        visor().value = "";
        valor2 = "";
        break;
      case "-":
        operador = sinal;
        valor2 = visor().value;
        valor1 = parseFloat(valor1) - parseFloat(valor2);
        visor().value = valor1;
        visor().value = "";
        valor2 = "";
        break;
      case "/":
        operador = sinal;
        valor2 = visor().value;
        valor1 = parseFloat(valor1) / parseFloat(valor2);
        visor().value = valor1;
        visor().value = "";
        valor2 = "";
        break;
      case "*":
        operador = sinal;
        valor2 = visor().value;
        valor1 = parseFloat(valor1) * parseFloat(valor2);
        visor().value = valor1;
        visor().value = "";
        valor2 = "";
        break;
      default:
        resultado = valor1;
        break;
    }
  }
}

function ponto() {
  var v = visor().value;
  if (v.indexOf(".") === -1 && v.indexOf(",") === -1) {
    visor().value += ".";
  }
}

// Função para alterar para número positivo ou negativo
function maisMenos() {
  var v = visor().value;
  if (v === "") {
    visor().value = "-";
  } else if (v.charAt(0) === "-") {
    visor().value = v.slice(1);
  } else {
    visor().value = "-" + v;
  }
}

function calcular() {
  switch (operador) {
    case "+":
      resultado = valor1 + parseFloat(visor().value);
      visor().value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "-":
      resultado = valor1 - parseFloat(visor().value);
      visor().value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "/":
      resultado = valor1 / parseFloat(visor().value);
      visor().value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "*":
      resultado = valor1 * parseFloat(visor().value);
      visor().value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    default:
      resultado = valor1;
      visor().value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
  }
  valor1 = "";
  operador = "";
}

function porcentagem() {
  valor2 = parseFloat(visor().value);
  if (operador == "*") {
    resultado = (valor1 / 100) * valor2;
  }
  visor().value = resultado;
}

// Função para apagar o último número do visor
function backspace() {
  del = visor().value;
  var next = del ? del.substr(0, del.length - 1) : "";
  visor().value = next === "" || next === "-" ? "0" : next;
}
