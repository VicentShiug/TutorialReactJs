const Lista = ({ itens }) => {
  return (
    <>
      {itens.map((item, index) => (
        <p>
          {index} - {item}
        </p>
      ))}
    </>
  );
};

export default Lista;
