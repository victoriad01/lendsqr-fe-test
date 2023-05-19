import { toggleFalse } from '../../../Slice/SidebarToggleSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import '../../Styles/Sibebar/Sidebar.scss'
import CompanyIcon from '../../assets/briefcase 1.svg'
import HomeIcon from '../../assets/home 1.svg'
import SidebarItem from './Components/Customers'

const Sidebar = () => {
  const stateCheck = useAppSelector((state) => state.toggle.value)

  console.log(stateCheck)

  const dispatch = useAppDispatch()

  const companies = [
    { name: 'Switch Organization', value: '0' },
    { name: 'VI-Media', value: '1' },
    { name: 'Twitter', value: '2' },
  ]

  return (
    <aside>
      <div
        className={
          stateCheck
            ? `main-container-sidebar2 no-scrollbar`
            : `main-container-sidebar no-scrollbar`
        }
      >
        <div className='toggle-left'>
          <p className='toggle-close' onClick={() => dispatch(toggleFalse())}>
            X
          </p>
        </div>
        <div className='company-section'>
          <img src={CompanyIcon} alt="Company's icon" />
          <select className='select-box'>
            {companies.map((company, i) => (
              <option value={company.value} key={i} className='select'>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <div className='company-dashboard'>
          <img src={HomeIcon} alt="Company's icon" />
          <p>Dashboard</p>
        </div>
        <div className='customers'>
          <div>
            <SidebarItem />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
