import CComp from './CompC';

function BComp(props) {
  return (
    <div style={{ backgroundColor: 'blue', width: '175px' }}>
      <h2>Comp B</h2>
      <CComp args={props.args}/>
    </div>
  );
}

export default BComp;
