import BComp from './CompB';
import { useState } from 'react';

function AComp() {
  const [message, setMessage] = useState('')
  return (
    <div style={{ backgroundColor: 'red', width: '200px' }}>
      <h2>Comp A</h2>
      <input type='text' onChange={e => setMessage(e.target.value)} />
      <BComp args={message} />
    </div>
  );
}

export default AComp;
