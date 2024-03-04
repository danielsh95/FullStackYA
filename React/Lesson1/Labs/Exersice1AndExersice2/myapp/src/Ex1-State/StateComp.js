import { useState } from "react"

function StateComp(props) {

  const [sum, setSum] = useState(0)
  const [num, setNum] = useState(0)

  const addToSum = () => {
    setSum(sum + num)
  }

  return (
    <div className="App">

      <input type="text" onChange={e => setNum(+e.target.value)} />
      <input type="button" onClick={addToSum} value='+' />
      sum: {sum} 



    </div>
  );
}

export default StateComp;
