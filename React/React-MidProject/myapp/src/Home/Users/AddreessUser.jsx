import { useEffect } from "react"
import { useState } from "react"



function AddreessUserComp({ address, callback }) {




  return (
    <div style={{ border: `5px solid black`, borderRadius: '25px' }} >
      <div style={{ margin: '5px' }}>
        Street:<input  type="text" value={address.street} onChange={e => callback.updateStreet(e.target.value)} /> <br />
        City:<input  type="text" value={address.city} onChange={e => callback.updateCity(e.target.value)} /><br />
        Zip Code: <input  type="text" value={address.zipcode} onChange={e => callback.updateZipCode(e.target.value)} />

      </div>
    </div>
  )
}

export default AddreessUserComp
