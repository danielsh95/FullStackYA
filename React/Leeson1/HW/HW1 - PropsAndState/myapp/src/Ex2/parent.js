import { useState } from "react";
import ChildComp from "./child";


function ParentComp() {

  const [products, setProducts] = useState([{ name: 'watch', price: '50', color: 'yellow' }])

  const [product, setProduct] = useState({ name: '', price: '0', color: '' })

  return (
    <div style={{ backgroundColor: 'pink', width: '200px' }}>

      Name: <input type="text" onChange={e => setProduct({ ...product, name: e.target.value })} /> <br />
      Price: <input type="text" onChange={e => setProduct({ ...product, price: e.target.value })} /><br />
      Color: <input type="text" onChange={e => setProduct({ ...product, color: e.target.value })} /><br />
      <input type="button" value={'Save'} onClick={() => setProducts([...products, product])} />  <br />

      <ChildComp products={products} />
    </div>


  );
}

export default ParentComp;
