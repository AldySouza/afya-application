const http = require('http');
const url = require ('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página não encontrada');
});

handleSignUp = async e => {
    e.preventDefault();
    const { cpf, celular, phone } = this.state;
    if (!cpf || !celular || !phone) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { cpf, celular, phone });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
