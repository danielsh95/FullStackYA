import UserComp from "./User";
import UsersComp from "./Users"
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <h2>Welcome to Users</h2>
      <Link to={'/Users'}>All Users</Link><br /><br />
      <Routes>
        <Route path='/' element={<UsersComp />} />
        <Route path="/Users" element={<UsersComp />} />
        <Route path="/Users/:id/:name/:email/:city" element={<UserComp />} />
      </Routes>
    </>
  )
}

export default App
