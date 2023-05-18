import '../../../../../Styles/Users/Users.scss'

interface Display {
  setShowOrganisation: React.Dispatch<React.SetStateAction<boolean>>
}

const Organisation = ({ setShowOrganisation }: Display) => {
  return (
    <div className='pop-up-organisation'>
      <div className='flex-close-organ'>
        <p className='organ-label'>Organization</p>
        <p
          className='organ-label-close'
          onClick={() => setShowOrganisation(false)}
        >
          X
        </p>
      </div>
      <select className='organ-select'>
        <option className=''>Select</option>
      </select>

      <div className='organ-item'>
        <label htmlFor='userInput'>Username</label>
        <input
          className='organ-select organ-label '
          placeholder='User'
          id='userInput'
        />
      </div>
      <div className='organ-item'>
        <label htmlFor='userEmail'>Email</label>
        <input
          className='organ-select organ-label  '
          placeholder='Email'
          type='email'
          id='userEmail'
        />
      </div>
      <div className='organ-item'>
        <label htmlFor='userDate'>Date</label>
        <input
          className='organ-select organ-label  '
          type='date'
          id='userDate'
        />
      </div>

      <div className='organ-item'>
        <label htmlFor='userNumber'>Phone Number</label>
        <input
          className='organ-select organ-label '
          placeholder='Phone Number'
          type='email'
          id='userNumber'
        />
      </div>

      <div>
        <p className='organ-label'>Status</p>
        <select className='organ-select'>
          <option className=''>Select</option>
        </select>
      </div>

      <div className='organ-button-group'>
        <button className='reset-button'>Reset</button>
        <button className='filter-button'>Filter</button>
      </div>
    </div>
  )
}

export default Organisation
