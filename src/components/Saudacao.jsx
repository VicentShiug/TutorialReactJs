function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, como vai?`;
  }
  return (
    <div>
      <p>{gerarSaudacao(nome)}</p>
    </div>
  );
}

export default Saudacao;
