import './App.scss'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Users from './Pages/Users/Users'
import Navandsidebar from './Navandsidebar'
import Userdetails from './Pages/UserDetails/Userdetails'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/users'
            element={
              <Navandsidebar>
                <Users />
              </Navandsidebar>
            }
          />
          <Route
            path='/users/:id'
            element={
              <Navandsidebar>
                <Userdetails />
              </Navandsidebar>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
