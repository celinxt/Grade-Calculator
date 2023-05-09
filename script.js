let students = [
  {
    name: "Celin",
    n1: 7,
    n2: 8,
  },
  {
    name: "Diego",
    n1: 6,
    n2: 5,
  },
  {
    name: "Sofia",
    n1: 9,
    n2: 8,
  },
];

let media = (name, n1, n2) => {
  result = (n1 + n2) / 2;
  alert(`A média entre as notas de ${name} é ${result.toFixed(1)}`);

  if (result >= 7) {
    alert(`Parabéns, ${name} você foi aprovado(a)!`);
  } else {
    alert("Você foi reprovado(a), dê o seu melhor na recuperação.");
  }
  return;
};

for (student of students) {
  stuMedia = media(student.name, student.n1, student.n2);
}
