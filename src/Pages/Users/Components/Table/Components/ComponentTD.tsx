import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ThreeDotIcon from '../../../../../assets/threedot.svg'
import ViewIcon from '../../../../../assets/view.svg'
import ActiveIcon from '../../../../../assets/activate_user.svg'
import BlackListIcon from '../../../../../assets/blacklist_user.svg'
import { User } from '../Table'

interface Position {
  left: number
  top: number
}

export interface UsersList {
  user: User
}

const ComponentTD = ({ user }: UsersList) => {
  const navigate = useNavigate()

  const ConvertTime = (dateString: string) => {
    const date: Date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }

    const formattedDate: string = date.toLocaleString('en-US', options)

    return formattedDate
  }

  const [position, setPosition] = useState<Position | null>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent) => {
    const boundingRect = divRef.current?.getBoundingClientRect()
    const left = event.clientX - (boundingRect?.width || 0) / 2
    const top = event.clientY
    setPosition({ left, top })
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setPosition(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <tr
      className='table-detail'
      key={user.id}
      onClick={() => navigate(`/users/${user.id}`)}
    >
      <td className='table-detail'>{user.orgName}</td>
      <td className='table-detail'>{user.userName}</td>
      <td className='table-detail'>{user.email}</td>
      <td className='table-detail'>{user.phoneNumber}</td>
      <td className='table-detail'>{ConvertTime(user.createdAt)}</td>
      <td className='table-detail'>Inactive</td>
      <td className='table-detail pointer'>
        <img src={ThreeDotIcon} alt='toggle button' onClick={handleClick} />
      </td>
      {position && (
        <div
          ref={divRef}
          style={{
            position: 'fixed',
            left: '1150px',
            top: `${position.top}px`,
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            width: '140px',
          }}
        >
          <div
            className='pop-detail'
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <img src={ViewIcon} alt='view icon' />
            <p>View Details</p>
          </div>
          <div className='pop-detail'>
            <img src={BlackListIcon} alt='view icon' />
            <p>Blacklist User</p>
          </div>
          <div className='pop-detail'>
            <img src={ActiveIcon} alt='view icon' />
            <p>Activate User</p>
          </div>
        </div>
      )}
    </tr>
  )
}

export default ComponentTD
