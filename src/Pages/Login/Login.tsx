import { useState, MouseEvent } from 'react'

import '../../Styles/Login/Login.scss'

import Logo from '../../assets/Group.svg'
import SignInImage from '../../assets/pablo-sign-in 1.svg'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    if (!email && !password) {
      setTimeout(() => {
        setError(true)
      }, 3000)
    } else {
      navigate('/users')
    }
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
            <p className='text' data-testid='enter-details'>
              Enter details to login.
            </p>
          </div>
          <div className='form-box'>
            <form className='form'>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  required
                  className='form-item'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Password'
                  required
                  className='form-item-password'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className='forgot-password'>FORGOT PASSWORD?</p>
              </div>

              {error ? (
                <p className='error' data-testid='error'>
                  Something went wrong. Please, try again!
                </p>
              ) : (
                ''
              )}
              <div className='button-container'>
                <button
                  type='submit'
                  className='form-item-button'
                  onClick={handleClick}
                  role='button'
                  disabled={!email && !password}
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
