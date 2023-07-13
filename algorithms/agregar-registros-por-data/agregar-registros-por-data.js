let registros = [
  { data: "2023-07-13", qtd: 12 },
  { data: "2023-07-14", qtd: 30 },
  { data: "2023-07-13", qtd: 4 },
  { data: "2023-07-14", qtd: 98 },
  { data: "2023-07-12", qtd: 4 },
  { data: "2023-07-12", qtd: 8 },
  { data: "2023-07-12", qtd: 31 },
  { data: "2023-07-15", qtd: 74 },
  { data: "2023-07-13", qtd: 12 },
  { data: "2023-07-12", qtd: 1 },
  { data: "2023-07-17", qtd: 3 },
  { data: "2023-07-16", qtd: 35 },
];

// * with reduce
function agregarRegistros(registros) {
  return registros.reduce((acc, registro) => {
    const data = registro.data;
    const quantidade = registro.qtd;
    acc[data] = (acc[data] || 0) + quantidade;
    return acc;
  }, {});
}

console.log(agregarRegistros(registros));

// * with for
/* function agregarRegistros(registros) {
  const registrosAgregados = {};

  for (let i = 0; i < registros.length; i++) {
    const registro = registros[i];
    const { data, qtd } = registro;

    if (registrosAgregados[data]) {
      registrosAgregados[data] += qtd;
    } else {
      registrosAgregados[data] = qtd;
    }
  }

  return registrosAgregados;
}
console.log(agregarRegistros(registros)); */
