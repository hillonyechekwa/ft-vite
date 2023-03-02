import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import UserForm from "./templates/UserForm"
import { isSignedInVar } from "../cache"
import { useNavigate } from "react-router-dom"

export const SIGNIN_USER = gql`
    mutation signIn($username: String, $email: String, $password: String!){
        signIn(username: $username, email: $email, password: $password)
    }`


const SignIn = () => {
    const navigate = useNavigate()
    const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
        onCompleted({signIn}){
            if(signIn){
                localStorage.setItem('token', signIn)
                isSignedInVar(true)
                navigate('/')
            }
        }
    })

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>An error occured</h1>
    return(
        <UserForm formType="signin" action={signIn} />
    )
}


export default SignIn