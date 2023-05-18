import '../../../../Styles/Users/Users.scss'
import Icon from '../../../../assets/icon.svg'
import Icon1 from '../../../../assets/icon (1).svg'
import Icon2 from '../../../../assets/icon (2).svg'
import Icon3 from '../../../../assets/icon (3).svg'
import { UsersList } from '../Table/Components/TD'

const Cards = ({ fetchedData }: UsersList) => {
  return (
    <div className='user-cards'>
      <div className='card'>
        <img src={Icon} alt='icon' />
        <p className='card-item-title'>Users</p>
        <p className='card-item-count'>{fetchedData.length}</p>
      </div>
      <div className='card'>
        <img src={Icon1} alt='icon' />
        <p className='card-item-title'>Active Users</p>
        <p className='card-item-count'>2,453</p>
      </div>
      <div className='card'>
        <img src={Icon2} alt='icon' />
        <p className='card-item-title'>Users with Loans</p>
        <p className='card-item-count'>12,453</p>
      </div>
      <div className='card'>
        <img src={Icon3} alt='icon' />
        <p className='card-item-title'>Users with Savings</p>
        <p className='card-item-count'>102,453</p>
      </div>
    </div>
  )
}

export default Cards
