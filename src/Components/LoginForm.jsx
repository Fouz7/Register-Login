import React, {useState} from 'react'
import {withTranslation } from 'react-i18next'
import { FaTimes } from 'react-icons/fa'
import Dummy from './Dummy'


const Login = ({t, onClose, openSuccessMessage}) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = Dummy.find((u) => u.email === user && u.password === password);
        if (foundUser) {
            // console.log("Form submitted");
            setError("");
            onClose();
            openSuccessMessage();
        } else {
            setError("Invalid username or password");
        }
    };

  return (
    <>
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-stone-800 rounded-md w-80 lg:w-1/4'>
                <div className='text-end text-stone-400 text-xl py-1 px-1.5'>
                    <button onClick={onClose}><FaTimes/></button>
                </div>
                <div>
                    <h1 className='text-stone-400 text-2xl text-center py-2'>{t('login.login')}</h1>
                </div>
                <form onSubmit={handleSubmit} className='p-4 flex flex-col space-y-3.5'>
                    <input 
                        type='text' 
                        placeholder={t('login.e/u')}
                        required
                        value={user}
                        onChange={(e)=> setUser (e.target.value)}
                        className='bg-stone-300 text-stone-700 focus:outline-none rounded-sm p-0.5'
                    />
                    <input
                        type='password'
                        placeholder={t('register.password')}
                        required
                        value={password}
                        onChange={(e)=> setPassword (e.target.value)}
                        className='bg-stone-300 text-stone-700 focus:outline-none rounded-sm p-0.5'
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <div className='text-center'>
                        <button className='bg-stone-400 w-1/3 rounded-sm py-0.5 mt-5' type='submit'>
                            {t('login.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default withTranslation()(Login);