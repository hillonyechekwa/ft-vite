import {useState} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import AdBanner from './AdBanner'
import Style from '../styles/layout.module.scss'
import Modal from './Modal'
import SignUp from './SignUp'
import SignIn from './SignIn'

// TODO: 🔧 implement layout functionality.

const Layout = ({children}) => {

  const [show, setShow] = useState(false)
  const [formType, setFormType] = useState(null)


  console.log('modal state', show)

  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)


    return(
        <>
    <main className={Style.layoutWrapper}>
      <main className={Style.innerWrapper}>
        <AdBanner />
        <Nav setModal={showModal} formType={setFormType}/>
        {/* <Nav/> */}
        {formType === 'signup'? 
        <Modal show={show} handleClose={closeModal} children={<SignUp />} />:
        <Modal show={show} handleClose={closeModal} children={<SignIn />} />
    }
        {children}
      </main>
      <Footer />
    </main>
    </>
    )
}


export default Layout