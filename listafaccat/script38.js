let usuario = prompt("Informe o nome de usuário");

if (usuario !== "1234") {
  document.write("Usuário Inválido");
} else {
  let senha = Number(prompt("Digite a senha"));
  if (senha !== 9999) {
    document.write("Senha inválida");
  } else {
    document.write("Login efetuado com sucesso.");
  }
}