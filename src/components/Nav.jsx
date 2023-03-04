import {useState} from 'react'
import { NavLink } from "react-router-dom";
import { isSignedInVar } from "../../cache";
import { useApolloClient, gql, useQuery } from "@apollo/client";
import Styles from '../styles/nav.module.scss'
import LinkButton from './LinkButton'
import CallButton from './CallButton'
import {FaCartPlus, FaChevronCircleDown, FaUserCircle} from 'react-icons/fa'
import { IconContext } from "react-icons";


const ISSIGNED_IN = gql`
  query IsUserSignedIn {
    isSignedIn @client
  }`

const Nav = ({setModal, formType}) => { 


    const client = useApolloClient()
    const {data} = useQuery(ISSIGNED_IN)

    console.log('data', data)


    const handleSignOut = () => {
        client.cache.evict({fieldName: 'me'})
        client.cache.gc()

        localStorage.removeItem('token')

        isSignedInVar(false)
    }


  return data.isSignedIn ? (
    <nav className={Styles.navWrapper}>
            <ul>
                <li className={Styles.logo}>
                    <NavLink to="/" >
                    <img src="/images/logo-colored.svg" alt="funda tech logo" />
                    </NavLink>
                </li>
                <li className={Styles.navItems}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </li>
                <li className={Styles.cta}>
                    <span className={Styles.signInBtns}>
                        <IconContext.Provider value={{size: "1.8rem", className: `${Styles.userProfile}`}}>
                            <FaUserCircle />
                        </IconContext.Provider>
                            <p>PROFILE</p>
                        <IconContext.Provider value={{size: "1.2rem", className: `${Styles.chevron}`}}>
                            <FaChevronCircleDown />
                        </IconContext.Provider>  
                    </span>
                    <IconContext.Provider value={{size: "1.3rem", className: `${Styles.cartIcon}`}}>
                    <NavLink to="/cart"><FaCartPlus /></NavLink>
                    </IconContext.Provider>
                    <button onClick={handleSignOut}>Sign Out</button>
                </li>
            </ul>
        </nav>
  ):(
    <nav className={Styles.navWrapper}>
            <ul>
                <li className={Styles.logo}>
                    <NavLink to="/" >
                    <img src="/images/logo-colored.svg" alt="funda tech logo" />
                    </NavLink>
                </li>
                <li className={Styles.navItems}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </li>
                <li className={Styles.cta}>
                    <LinkButton path="/contact" btnType="three">Book An Appointment</LinkButton>
                    {/* add set modal prop back to call button */}
                    <button onClick={() => {
                        setModal()
                        formType("signin")
                    }}> Login</button>
                    <button onClick={() => {
                        setModal()
                        formType("signup")
                    }}> Get Started</button>
                </li>
            </ul>
        </nav>
  );
};


export default Nav