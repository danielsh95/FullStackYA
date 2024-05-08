import { useEffect } from "react"
import { useState } from "react"
import AddreessUserComp from "./AddreessUser"



function UserComp({ borderColor, user, callback }) {

  const [isShowAddrees, setIsShowAddrees] = useState(false)
  const [userLocal, setUserLocal] = useState({})

  useEffect(() => {
    const fetchData = () => {
      setUserLocal(user);
    }
    fetchData();
  }, [user])

  const updateStreet = (street) => {
    setUserLocal({ ...user, address: { ...userLocal.address, street: street } })
  }
  const updateCity = (city) => {
    setUserLocal({ ...user, address: { ...userLocal.address, city: city } })
  }
  const updateZipCode = (zipcode) => {
    setUserLocal({ ...user, address: { ...userLocal.address, zipcode: zipcode } })
  }

  return (
    <div style={{ border: `5px solid ${borderColor}` }}>

      {<div style={{ margin: '5px' }}>

        Id: <label onClick={() => { }}>{userLocal.id || ''} </label>  <br />
        Name: <input type="text" value={userLocal.name || ''} onChange={e => setUserLocal({ ...userLocal, name: e.target.value })} /><br />
        Email: <input type="text" value={userLocal.email || ''} onChange={e => setUserLocal({ ...userLocal, email: e.target.value })} /><br />
        <input type="button" value={'Other Date'} onMouseOver={() => setIsShowAddrees(false)} onClick={() => setIsShowAddrees(true)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {
          isShowAddrees && <div >
            <AddreessUserComp address={userLocal.address} callback={{ updateStreet, updateCity, updateZipCode }} isShow={setIsShowAddrees} />
          </div>
        }
        <div style={{ textAlign: 'right' }}>
          <input type="button" style={{ "backgroundColor": '#eeb570' }} value={'Update'} onClick={() => callback.updateUser(userLocal)} />&nbsp;&nbsp;
          <input type="button" style={{ "backgroundColor": '#eeb570' }} value={'Delete'} onClick={() => callback.deleteUser(userLocal.id)} />
        </div>
      </div>
      }
    </div>
  )
}

export default UserComp
