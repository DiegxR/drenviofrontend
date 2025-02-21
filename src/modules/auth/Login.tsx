import React from 'react'
import LoginForm from './components/LoginForm'
import { ToastContainer } from 'react-toastify'
const Login = () => {

  return (
    <section className='bg-dots w-screen h-screen flex justify-center items-center'>
        <div className='bg-white h-[600px] w-[500px] flex flex-col gap-8 justify-center items-center shadow-lg py-10 rounded-[12px]'>
            <LoginForm/>
        </div>
        <ToastContainer />
    </section>
  )
}

export default Login