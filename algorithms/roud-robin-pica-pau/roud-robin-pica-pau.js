function distribuicaoDesonesta(comidas) {
  const picaPau = "pica-pau";
  const lobo = "lobo burro";

  let totalPicaPau = 0;
  let totalLobo = 0;

  for (let i = 0; i < comidas.length; i++) {
    const comidaAtualPicaPau = comidas[totalPicaPau + totalLobo];

    if (comidaAtualPicaPau === undefined) break;

    if (i % 2 === 0) {
      console.log(`${picaPau} recebe ${comidaAtualPicaPau}`);
      totalPicaPau++;
    } else {
      for (let j = 0; j < totalPicaPau; j++) {
        const comidaAtualLobo = comidas[totalLobo + totalPicaPau];

        if (comidaAtualLobo === undefined) break;

        console.log(`${lobo} recebe ${comidaAtualLobo}`);
        totalLobo++;
      }
    }
  }
}

const comidas = [
  "milk shake",
  "banana",
  "suco",
  "batata frita",
  "cachorro quente",
  "frango",
  "sardinha",
  "maçã",
  "refrigerante",
  "bolo",
  "leite",
];

distribuicaoDesonesta(comidas);
