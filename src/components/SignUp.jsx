import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import UserForm from "../templates/UserForm"
import { isSignedInVar } from "../../cache"
import { useNavigate } from "react-router-dom"
import {Helmet} from 'react-helmet'

export const SIGNUP_USER = gql`
    mutation signUp($username: String!, $email: String!, $phone: String!, $password: String!){
        signUp(username: $username, email: $email, phone: $phone, password: $password)
    }`


const SignUp = () => {
    const navigate = useNavigate()
    const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
        onCompleted({signUp}){
            if(signUp){
                console.log(signUp)
                console.error()
                localStorage.setItem('token', signUp)
                isSignedInVar(true)
                navigate('/welcome')
            }
        }
    })

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>An error occured</h1>
    return(
        <>
        <Helmet>
            <title>
                Fundamental Technology - Sign Up
            </title>
        </Helmet>
        <UserForm formType="signup" action={signUp} />
        </>
    )
}


export default SignUp