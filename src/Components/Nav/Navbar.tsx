import '../../Styles/Navbar/Navbar.scss'

import Logo from '../../assets/Group.svg'
import SearchIcon from '../../assets/search_icon.svg'
import Notification_Icon from '../../assets/Notification.svg'

import Dp_Icon from '../../assets/image 4.png'
import MenuIcon from '../../assets/menu.svg'
// import { useSelector } from 'react-redux'

import { useAppSelector, useAppDispatch } from '../../../hooks'
import { toggleTrue } from '../../../Slice/SidebarToggleSlice'

const users = [
  { name: 'Victor', value: '0' },
  { name: 'Peace', value: '1' },
  { name: 'Joy', value: '2' },
]

const Navbar = () => {
  const stateCheck = useAppSelector((state) => state.toggle.value)

  const dispatch = useAppDispatch()

  return (
    <div className='main-container-navbar'>
      <div className='nav-left'>
        <div>
          <img src={Logo} alt="Company's Logo" className='nav_logo' />
        </div>
        <div className='search-area'>
          <input placeholder='Search for anything' className='search-input' />
          <div className='search-green-box'>
            <img src={SearchIcon} alt="Company's Logo" />
          </div>
        </div>
      </div>
      <div className='user-detail-nav'>
        <p className='docs'>Docs</p>
        <img src={Notification_Icon} alt='Notification Icon' />
        <div className='dp-and-select'>
          <img src={Dp_Icon} alt='Notification Icon' className='dp-image' />
          <select className='select-box'>
            {users.map((u, i) => (
              <option value={u.value} key={i} className='select'>
                {u.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <img
            src={MenuIcon}
            alt='menu icon'
            className='menu-icons'
            onClick={() => {
              dispatch(toggleTrue())
              console.log(stateCheck)
              console.log('Clicked')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
