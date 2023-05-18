import { useState, useEffect } from 'react'
import '../../Styles/Userdetails/Userdetails.scss'

import BackIcon from '../../assets/back arrow.svg'
import ProfileIcon from '../../assets/userdp_icon.svg'
import FullStarIcon from '../../assets/Full star.svg'
import OutlineStarIcon from '../../assets/Outline star.svg'
import { useNavigate } from 'react-router-dom'
import { GeneralComponent } from './Components/General'
import axios from 'axios'

export interface UserdetailsInterface {
  accountBalance: string
  accountNumber: string
  createdAt: string
  education: object
  email: string
  guarantor: object
  id: string
  lastActiveDate: string
  orgName: string
  phoneNumber: string
  profile: object
  socials: object
  userName: string
}

const Userdetails = () => {
  const navigate = useNavigate()

  const [fetchedData, setFetchedData] = useState<UserdetailsInterface | null>(
    null
  )

  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const response = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/10'
      )
      const data = response?.data
      console.log(data)
      // Convert array of objects to a JSON string
      const json = JSON.stringify(data)
      // Save the JSON string to local storage
      localStorage.setItem('userDetails', json)
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

  console.log(fetchedData)

  const [toggle, setToggle] = useState({
    general: true,
    doc: false,
    bank: false,
    loans: false,
    savings: false,
    app: false,
  })

  // General
  const General = () => {
    setToggle({
      general: true,
      doc: false,
      bank: false,
      loans: false,
      savings: false,
      app: false,
    })
  }
  // Documents
  const Documents = () => {
    setToggle({
      general: false,
      doc: true,
      bank: false,
      loans: false,
      savings: false,
      app: false,
    })
  }
  // Bank
  const Bank = () => {
    setToggle({
      general: false,
      doc: false,
      bank: true,
      loans: false,
      savings: false,
      app: false,
    })
  }
  // Loans
  const Loans = () => {
    setToggle({
      general: false,
      doc: false,
      bank: false,
      loans: true,
      savings: false,
      app: false,
    })
  }
  // Savings
  const Savings = () => {
    setToggle({
      general: false,
      doc: false,
      bank: false,
      loans: false,
      savings: true,
      app: false,
    })
  }
  // App and System
  const App = () => {
    setToggle({
      general: false,
      doc: false,
      bank: false,
      loans: false,
      savings: false,
      app: true,
    })
  }

  return (
    <div className='detail-container'>
      <div className='back' onClick={() => navigate('/users')}>
        <img src={BackIcon} alt='back arrow' />
        <p>Back to Users</p>
      </div>
      <div className='second-block'>
        <p className='user-detail'>User Details</p>
        <div className='buttons-area'>
          <button className='button-red'>BLACKLIST USER</button>
          <button className='button-green'>ACTIVATE USER</button>
        </div>
      </div>

      <div className='third-block'>
        <div className='flex-the-items'>
          <div className='profile'>
            <div>
              <img src={ProfileIcon} alt='dp-icon' className='dp-image' />
            </div>
            <div className='profile-name-area'>
              <p className='p-name'>{fetchedData?.profile?.firstName}</p>

              <p className='p-code'>{fetchedData?.accountNumber}</p>
            </div>
          </div>
          <div className='Tier-container'>
            <p className='tier-users'>User’s Tier</p>
            <div>
              <img src={FullStarIcon} alt='start' />
              <img src={OutlineStarIcon} alt='start' />
              <img src={OutlineStarIcon} alt='start' />
            </div>
          </div>
          <div>
            <p className='p-name'>₦{fetchedData?.accountBalance}</p>
            <p className='p-code'>{fetchedData?.accountNumber}/Providus Bank</p>
          </div>
        </div>
        <div className='toggle-items'>
          <p
            className={toggle.general ? 'item-green' : 'item-gray'}
            onClick={General}
          >
            General Details
          </p>
          <p
            className={toggle.doc ? 'item-green' : 'item-gray'}
            onClick={Documents}
          >
            Documents
          </p>
          <p
            className={toggle.bank ? 'item-green' : 'item-gray'}
            onClick={Bank}
          >
            Bank Details
          </p>
          <p
            className={toggle.loans ? 'item-green' : 'item-gray'}
            onClick={Loans}
          >
            Loans
          </p>
          <p
            className={toggle.savings ? 'item-green' : 'item-gray'}
            onClick={Savings}
          >
            Savings
          </p>
          <p className={toggle.app ? 'item-green' : 'item-gray'} onClick={App}>
            App and System
          </p>
        </div>
      </div>
      <div>
        {toggle.general ? <GeneralComponent fetchedData={fetchedData} /> : ''}
      </div>
    </div>
  )
}

export default Userdetails
