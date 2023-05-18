import { useState, useEffect } from 'react'

import '../../Styles/Users/Users.scss'
import Cards from './Components/Card/Card'
import Table, { User } from './Components/Table/Table'
import axios from 'axios'

function Users() {
  const [fetchedData, setFetchedData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const response = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      )
      const data = response?.data
      // Convert array of objects to a JSON string
      const json = JSON.stringify(data)
      // Save the JSON string to local storage
      localStorage.setItem('userData', json)
      setFetchedData(data)
    } catch (error) {
      setLoading(false)
      setIsError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    response()
  }, [])

  return (
    <div className='user-main-container'>
      <p className='users'>Users</p>
      <div>
        <Cards fetchedData={fetchedData} />
      </div>
      <div>
        <Table fetchedData={fetchedData} />
      </div>
    </div>
  )
}

export default Users
