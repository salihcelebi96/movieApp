import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword } from '../reducers/authReducer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AuthForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);





    const username = useSelector((state) => state.auth.username);
    const email = useSelector((state) => state.auth.email);
    const password = useSelector((state) => state.auth.password);

    const initialValues = {
        username: username || '',
        email: email || '',
        password: password || '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const dispatch = useDispatch();

    const onSubmit = (values, { setSubmitting }) => {
        // Assuming your authentication logic here...
        // Check if the username, email, and password are correct
        if (
          values.username === 'correctUsername' &&
          values.email === 'correctEmail@example.com' &&
          values.password === 'correctPassword'
        ) {
          // Dispatch the LOGIN_SUCCESS action to set isLoggedIn to true
          dispatch({ type: 'LOGIN_SUCCESS', payload: { username: values.username, email: values.email, password: values.password } });
          // Also, dispatch actions to update username and email in the Redux store
          dispatch(setUsername(values.username));
          dispatch(setEmail(values.email));
          dispatch(setPassword(values.password));
    
          // Navigate to "/detail" page if logged in
          navigate('/');
        } else {
          // Dispatch the LOGOUT_SUCCESS action if not logged in
          dispatch({ type: 'LOGOUT_SUCCESS' });
          // Set submitting to false to indicate form submission is complete
          setSubmitting(false);
    
          // Navigate to "/formik" page if not logged in
          navigate('/formik');
        }
        console.log('Form submitted');
      };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-red-600 text-3xl mb-10'>Authentication Form</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className='text-white w-72'>
                    <div className='flex flex-col h-20'>
                        <label htmlFor='username'>Username:</label>
                        <Field
                            type='text'
                            id='username'
                            name='username'
                            className='w-full bg-gray-100 border text-black border-gray-300 rounded-md px-5 mt-1 focus:outline-none focus:ring focus:border-blue-300'
                        />
                        <ErrorMessage className='text-red-400' name='username' component='div' />
                    </div>

                    <div className='flex flex-col h-20'>
                        <label htmlFor='email'>Email:</label>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            className='w-full bg-gray-100 text-black border border-gray-300 rounded-md px-5 mt-1 focus:outline-none focus:ring focus:border-blue-300'
                        />
                        <ErrorMessage className='text-red-400' name='email' component='div' />
                    </div>

                    <div className='relative  h-20'>
                        <label htmlFor='email'>Password:</label>
                        <Field
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            name='password'
                            className='w-full bg-gray-100 border border-gray-300 rounded-md text-black  h-7 focus:outline-none focus:ring focus:border-none'
                        />
                        <div className='absolute bottom-7 right-0   flex items-center '>
                            <button
                                type='button'
                                className='focus:outline-none focus:ring h-7  px-1 text-white bg-red-700 '
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>


                        <ErrorMessage className='text-red-400' name='password' component='div' />
                    </div>

                    <Link to="/">
                        <button className='bg-green-700 hover:bg-green-600 w-full my-5 py-2' type='submit'>
                            Submit
                        </button>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};

export default AuthForm;
