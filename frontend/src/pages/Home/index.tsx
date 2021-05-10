import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">
            Analise o desempenho de suas vendas por diferentes perspectivas
          </p>
          <hr/>
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um backend construído em Spring Boot. </p>
        </div>
        <Link className="btn btn-primary btn-lg" to="/dashboard">
          Acessar dashboard
        </Link>
      </div>
    </>
  );
}
