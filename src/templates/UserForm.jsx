import { useState } from "react";
import {useFormik} from 'formik'
import { Link } from "react-router-dom";
import Styles from '../styles/form.module.scss'
import {Helmet} from 'react-helmet'
import CallButton from '../components/CallButton'







const UserForm = ({formType, action}) => {
    const [values, setValues] = useState()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phone: '',
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
        <main className={Styles.formPageContainer}>
            <header>
                {formType === 'signup'? <div><img src="/images/logo-colored.svg" alt="fundamental technology logo" />" <p>Login to your profile</p></div> : <div><img src="/images/logo-colored.svg" alt="fundamental technology logo" />" <p>Fill in your details to sign up</p></div>}
            </header>
            <form onSubmit={formik.handleSubmit}>
                {formType === 'signup' && (
                    <>
                    <section className={Styles.formControl}>
                        <label htmlFor="username" className="">
                        <input
                            required
                            id="username"
                            name="username"
                            type="text"
                            placeholder=" fullname"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            className="" />
                            </label>
                    </section><section className={Styles.formControl}>
                            <label htmlFor="email" className="">
                            <input
                                required
                                id="phone"
                                name="phone"
                                type="phone"
                                placeholder=" phone number"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className="" />
                                </label>
                        </section>
                    </>
                )}
            <section className={Styles.formControl}>
                <label htmlFor="email" className="">
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className=""
                />
                </label>
                </section>    
                <section className={Styles.formControl}>
                <label htmlFor="password" className="">
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className=""
                />
                </label>
                </section>
                <CallButton type="submit" btnType="secondary">
                    submit
                </CallButton>
            </form>
                    {/* TODO: chore add google identity api for google sign in! */}
        </main>
    )
}


export default UserForm