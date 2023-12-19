const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Carlos", nota: 7 },
  { nome: "Ana", nota: 9 },
  { nome: "Pedro", nota: 4 },
];

function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);
