# SelecaoVlab

Olá, você foi selecionado para a fase de desafio técnico. Para prosseguir com o seu desafio, precisamos informar algumas questões.

- **Não faça um fork deste projeto, você deve fazer um clone local e criar um repositorio privado a partir dele**
- Para que as suas requisições funcionem, você precisa entrar na pasta proxy, fazer um `npm install` nela e em seguida `node ./server.js`.
- A documentação da API que você irá consumir pode ser encontrada em https://www.freetogame.com/api-doc.
- Note que para a requisição funcionar você deverá fazer sempre rodar o serviço node na pasta proxy e fazer suas requisições adicionando http://localhost:4123/ antes de cada url. Exemplo: caso deseje buscar todos os jogos, você deverá fazer um GET para a seguinte url: `http://localhost:4123/https://www.freetogame.com/api/games`. **Faça a requisição para o localhost usando http e não https**.
- Se o projeto não estiver rodando corretamente não se desespere, é intencional, existem alguns bugs que você deve corrigir para que o projeto funcione.
- Boa sorte =D

# Comentários

0.Ter Node.js e Angular instalado

1.Para testar a aplicação basta subir o server da mesma maneira de antes (com 'npm install' e node ./server.js no diretório proxy) e rodar um ng serve em outro terminal. A aplicação deve abrir no diretório http://localhost:4200

2.Para rodar os testes automatizados certifique-se de ter Python instaldo. Depois disso, basta rodar o comando 'npm run test-selenium', vale notar que os testes estão demorando por volta de 90 segundo para terminarem e eles são executados em ordem aleatória.
