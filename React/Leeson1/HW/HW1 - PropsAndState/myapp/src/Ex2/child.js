import { useState } from "react";


function ChildComp(props) {

  const [isShow, setIsShow] = useState(false)

  return (
    <div>

      <input type="button" value={'Show/hidden'} onClick={() => setIsShow(!isShow)} />

      {isShow && <table border={2}>
        <thead><tr><th>Name</th><th>Price</th><th>Color</th></tr></thead>
        <tbody>
          {
            props.products.map((product, index) => {
              return <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      }
    </div>
  );
}

export default ChildComp;
