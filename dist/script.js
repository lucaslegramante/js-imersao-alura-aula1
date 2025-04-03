function jogar() {
  name = prompt("Digite um nome de uma Sombra: ");
  const shadownsNames = [
    "Beru",
    "Bellion",
    "Igris",
    "Kamish",
    "Greed",
    "Tank",
    "Fang"
  ];
  if (name == "null" || name.trim() === "") {
    alert("Você nao digitou nenhum valor :(");
  } else if (
    shadownsNames.some((n) => n.toLowerCase() === name.toLowerCase())
  ) {
    alert(`${name} é uma das sombras!`);
  } else {
    alert(`${name} não é uma sombra :(`);
  }
}

// jogar()