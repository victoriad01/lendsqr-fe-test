import { useState, useEffect } from 'react'

import '../../Styles/Users/Users.scss'
import Cards from './Components/Card/Card'
import Table, { User } from './Components/Table/Table'
import axios from 'axios'

import ReactPaginate from 'react-paginate'

interface Selected {
  selected: number
}

function Users() {
  const [fetchedData, setFetchedData] = useState<User[]>([])
  // const [loading, setLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 9
  const pagesVisited = pageNumber * userPerPage
  const displayUsers = fetchedData.slice(
    pagesVisited,
    pagesVisited + userPerPage
  )

  const response = async () => {
    try {
      // setLoading(true)
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
      // setLoading(false)
      // setIsError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    response()
  }, [])

  const pageCount = Math.ceil(fetchedData?.length / userPerPage)
  const changePage = ({ selected }: Selected) => {
    setPageNumber(selected)
  }

  return (
    <div className='user-main-container'>
      <p className='users' data-testid='users'>Users</p>
      <div data-testId='cards'>
        <Cards fetchedData={fetchedData} />
      </div>
      <div data-testId='table'>
        <Table fetchedData={displayUsers} />
        {displayUsers.length > 0 ? (
          <div className='paginate-session'>
            <div className='showing'>
              <p>Showing</p>
              <p className='count'>{userPerPage}</p>
              <p>out of {fetchedData.length}</p>
            </div>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginate-container'}
              previousLinkClassName={'pre-btn'}
              nextLinkClassName={'next-btn'}
              activeClassName={'active'}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Users
