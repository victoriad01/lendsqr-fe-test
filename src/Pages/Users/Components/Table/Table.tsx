import { useState, useEffect, useRef } from 'react'
import '../../../../Styles/Users/Users.scss'
import FilterIcon from '../../../../assets/filter.svg'

import TDComponent, { UsersList } from './Components/TD'
import Organisation from './Components/Organisation'

export interface User {
  accountBalance: string
  accountNumber: string
  createdAt: string
  education: object
  email: string
  guarantor: string
  id: string
  lastActiveDate: string
  orgName: string
  phoneNumber: string
  profile: object
  socials: object
  userName: string
}

const Table = ({ fetchedData }: UsersList) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [showOrganisation, setShowOrganisation] = useState(false)

  const handleClick = () => {
    setShowOrganisation(!showOrganisation)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowOrganisation(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='table-container'>
      <table className='d-table'>
        <thead>
          <tr className=''>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>ORGANIZATION</p>
                <img
                  src={FilterIcon}
                  alt='filter icon'
                  className='pointer'
                  onClick={handleClick}
                />
              </div>
            </th>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>USERNAME</p>
                <img src={FilterIcon} alt='filter icon' className='pointer' />
              </div>
            </th>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>EMAIL</p>
                <img src={FilterIcon} alt='filter icon' className='pointer' />
              </div>
            </th>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>PHONE NUMBER</p>
                <img src={FilterIcon} alt='filter icon' className='pointer' />
              </div>
            </th>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>DATE JOINED</p>
                <img src={FilterIcon} alt='filter icon' className='pointer' />
              </div>
            </th>
            <th className='d-table-th'>
              <div className='title-and-icon'>
                <p>STATUS</p>
                <img src={FilterIcon} alt='filter icon' className='pointer' />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <TDComponent fetchedData={fetchedData} />
        </tbody>
      </table>
      {showOrganisation ? (
        <Organisation setShowOrganisation={setShowOrganisation} />
      ) : (
        ''
      )}
    </div>
  )
}

export default Table
