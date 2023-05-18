import { ReactNode } from 'react'
import Navbar from './Components/Nav/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

import './Styles/Navandsidebar/Navandsidebar.scss'

interface Prop {
  children: ReactNode
}

const Navandsidebar = ({ children }: Prop) => {
  return (
    <>
      <div className=''>
        {/* <div className=''>
          <Navbar />
        </div> */}
        <Navbar />
        <div className='sidebarandpage'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='page'>
            <div className=''>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navandsidebar
