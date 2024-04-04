function CComp(props) {
  return (
    <div style={{ backgroundColor: 'green', width: '150px' }}>
      <h2>Comp C</h2>
      <h2>{props.args}</h2>
    </div>
  );
}

export default CComp;
