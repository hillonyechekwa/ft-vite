import { useState } from "react";
import {useFormik} from 'formik'
import { Link } from "react-router-dom";
import Styles from '../styles/UserForm'




const UserForm = ({formType, action}) => {
    const [values, setValues] = useState()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.table(values)
            action({
                variables: {
                    ...values
                }
            })
        },
        onChange: event => {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    })
    
    return(
        <main>
            <header>
                {formType === 'signup'? <h1>Sign Up</h1> : <h1 className="">Sign In</h1>}
            </header>
            <form onSubmit={formik.handleSubmit}>
            <section className="">
                <label htmlFor="username" className="">Username:</label>
                <input
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder=" enter a username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className=""
                />
                </section>
            <section className="">
                <label htmlFor="email" className="">Email:</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" enter your email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className=""
                />
                </section>
            <section className="">
                <label htmlFor="password" className="">Password:</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className=""
                />
                </section>
                <button type="submit">
                    {formType === 'signup'? <p>Sign Up</p> : <p className="">Sign In</p>}
                </button>
            </form>

            {formType === 'signup'? <h3>{`Already have an account?`} <Link to="/signin">SignIn</Link></h3> : <h3 className="">{`Don't have an account?`}<Link to="/signup">SignUp</Link></h3>}

        </main>
    )
}


export default UserForm