import { useState } from 'react'

import '../../Styles/Login/Login.scss'

import Logo from '../../assets/Group.svg'
import SignInImage from '../../assets/pablo-sign-in 1.svg'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    navigate('/users')
  }
  return (
    <div className='main-container'>
      <div className='container1'>
        <div>
          <img src={Logo} alt='Lendsqr Logo' className='logo' />
          <img src={SignInImage} alt='Sign in Image' className='image-pablo' />
        </div>
      </div>
      <div className='container2'>
        <div className='container2-body'>
          <div>
            <h1 className='welcome-text'>Welcome!</h1>
            <p className='text'>Enter details to login.</p>
          </div>
          <div className='form-box'>
            <form className='form'>
              <div>
                <input
                  type='text'
                  placeholder='Email'
                  required
                  className='form-item'
                />
              </div>
              <div className='input-container'>
                <input
                  type='password'
                  placeholder='Password'
                  required
                  className='form-item-password'
                />
              </div>
              <p className='forgot-password'>FORGOT PASSWORD?</p>
              <div className='button-container'>
                <button
                  type='submit'
                  className='form-item-button'
                  onClick={handleClick}
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
