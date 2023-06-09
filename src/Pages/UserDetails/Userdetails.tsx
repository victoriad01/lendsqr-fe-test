import { useState, useEffect } from 'react'
import '../../Styles/Userdetails/Userdetails.scss'

import BackIcon from '../../assets/back arrow.svg'
import ProfileIcon from '../../assets/userdp_icon.svg'
import FullStarIcon from '../../assets/Full star.svg'
import OutlineStarIcon from '../../assets/Outline star.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { GeneralComponent } from './Components/General'
import axios from 'axios'

export interface UserdetailsInterface {
  accountBalance: string
  accountNumber: string
  createdAt: string
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
    officeEmail: string
    monthlyIncome: [string, string]
    loanRepayment: string
  }
  email: string
  guarantor: {
    firstName: string
    lastName: string
    phoneNumber: string
    gender: string
    address: string
    email: string
    relationship: string
  }
  id: string
  lastActiveDate: string
  orgName: string
  phoneNumber: string
  profile: {
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    gender: string
    bvn: string
    address: string
    currency: string
  }
  socials: {
    facebook: string
    instagram: string
    twitter: string
  }
  userName: string
}

const Userdetails = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const [fetchedData, setFetchedData] = useState<UserdetailsInterface | null>(
    null
  )

  // const [loading, setLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const response = async () => {
    try {
      // setLoading(true)
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      const data = response?.data
      // Convert array of objects to a JSON string
      const json = JSON.stringify(data)
      // Save the JSON string to local storage
      localStorage.setItem('userDetails', json)
      setFetchedData(data)
    } catch (error) {
      // setLoading(false)
      // setIsError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    response()
  })

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
    <div className='detail-container' data-testid='load-details'>
      <div
        className='back'
        onClick={() => navigate('/users')}
        data-testid='back-cp'
      >
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

      <div className='third-block' data-testid='card-cp'>
        <div className='flex-the-items'>
          <div className='profile'>
            <img
              src={fetchedData?.profile.avatar || ProfileIcon}
              alt='dp-icon'
              className='dp-image'
            />

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
      <div data-testid='general'>
        {toggle.general ? <GeneralComponent fetchedData={fetchedData} /> : ''}
      </div>
    </div>
  )
}

export default Userdetails
