import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {stateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom';
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@material-ui/core";



type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Login = () => {

    const isAuth = useSelector<stateType>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email Required!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password Required!'
            } else if (values.password.length < 3) {
                errors.password = 'Password must be more than 2 symbols!'
            }
            return errors;
        },
        onSubmit: value => {
            dispatch(login(value))
            formik.resetForm()
        }
    })

        if (isAuth) {
            return <Redirect to={"/profile"}/>
        }



    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            name="email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email &&
                        formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            name="password"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password &&
                        formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            name="rememberMe"
                            label={"Remember me"}
                            {...formik.getFieldProps('rememberMe')}
                            control={<Checkbox/>}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}