const login = prompt("Login: ");
const senha = prompt("Senha");

if (
  (login == "aluno" && senha == "123") ||
  (login == "professor" && senha == "456")
) {
  alert("Login efetuado com sucesso!");
} else {
  alert("Erro! Login e/ou senha incorreto(s)!");
}
