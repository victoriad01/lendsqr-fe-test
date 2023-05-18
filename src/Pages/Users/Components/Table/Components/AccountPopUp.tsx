import '../../../../../Styles/Users/Users.scss'
import ViewIcon from '../../../../../assets/view.svg'
import ActiveIcon from '../../../../../assets/activate_user.svg'
import BlackListIcon from '../../../../../assets/blacklist_user.svg'

const AccountPopUp = () => {
  return (
    <div
    // className='pop-up-container'
    // style={divStyle}
    >
      <div className='pop-detail'>
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
  )
}

export default AccountPopUp
