import '../../../Styles/Sibebar/Sidebar.scss'
import UserIcon from '../../../assets/users.svg'
import GuaIcon from '../../../assets/guarantors.svg'
import LoanIcon from '../../../assets/loans.svg'
import DecIcon from '../../../assets/decisionmodel.svg'
import SaveIcon from '../../../assets/savings.svg'
import LoanReqIcon from '../../../assets/loanreq.svg'
import WhiteListIcon from '../../../assets/whitelist.svg'
import KarmaIcon from '../../../assets/karma.svg'
import CompanyIcon from '../../../assets/briefcase 1.svg'
import SavingsProductIcon from '../../../assets/savingandproduct.svg'
import FeesandProduct from '../../../assets/feeandcharge.svg'
import TransactionIcon from '../../../assets/transaction.svg'
import ServiceIcon from '../../../assets/services.svg'
import ServiceAccountIcon from '../../../assets/service account.svg'
import SettlementIcon from '../../../assets/settlement.svg'
import PreferencesIcon from '../../../assets/preferences.svg'
import FeeAndPriceIcon from '../../../assets/fee and pricing.svg'
import AuditIcon from '../../../assets/audit log.svg'

import MsgIcon from '../../../assets/tire 1.svg'
import LogoutIcon from '../../../assets/sign-out 1.svg'

import { NavLink, useNavigate } from 'react-router-dom'

const SidebarItem = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <p className='customer'>CUSTOMERS</p>

      <NavLink
        to='/users'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div>
          <div className='customer-div'>
            <img src={UserIcon} alt='icon' />
            <p className='customers-word'>Users</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div>
          <div className='customer-div'>
            <img src={GuaIcon} alt='icon' />
            <p className='customers-word'>Guarantors</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={LoanIcon} alt='icon' />
            <p className='customers-word'>Loans</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={DecIcon} alt='icon' />
            <p className='customers-word'>Decision Models</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={SaveIcon} alt='icon' />
            <p className='customers-word'>Savings</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={LoanReqIcon} alt='icon' />
            <p className='customers-word'>Loan Requests</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={WhiteListIcon} alt='icon' />
            <p className='customers-word'>Whitelist</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={KarmaIcon} alt='icon' />
            <p className='customers-word'>Karma</p>
          </div>
        </div>
      </NavLink>

      <p className='section-title customer'>BUSINESSES</p>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={CompanyIcon} alt='icon' />
            <p className='customers-word'>Organization</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={LoanReqIcon} alt='icon' />
            <p className='customers-word'>Loan Products</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={SavingsProductIcon} alt='icon' />
            <p className='customers-word'>Savings Products</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={FeesandProduct} alt='icon' />
            <p className='customers-word'>Fees and Charges</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={TransactionIcon} alt='icon' />
            <p className='customers-word'>Transactions</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={ServiceIcon} alt='icon' />
            <p className='customers-word'>Services</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={ServiceAccountIcon} alt='icon' />
            <p className='customers-word'>Service Account</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={SettlementIcon} alt='icon' />
            <p className='customers-word'>Settlements</p>
          </div>
        </div>
      </NavLink>
      <p className='section-title customer'>SETTINGS</p>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={PreferencesIcon} alt='icon' />
            <p className='customers-word'>Preferences</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={FeeAndPriceIcon} alt='icon' />
            <p className='customers-word'>Fees and Pricing</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={AuditIcon} alt='icon' />
            <p className='customers-word'>Audit Logs</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'customers-map ' : isActive ? 'customers-map-clicked' : ''
        }
      >
        <div className=''>
          <div className='customer-div'>
            <img src={MsgIcon} alt='icon' />
            <p className='customers-word'>Systems Messages</p>
          </div>
        </div>
      </NavLink>
      <div className='last-sidebar-section'>
        <div
          className='customer-div logout-pointer'
          onClick={() => navigate('/')}
        >
          <img src={LogoutIcon} alt='logout icon' />
          <p>Logout</p>
        </div>
        <div className='customer-div'>
          <p className='version'>v1.2.0</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarItem
