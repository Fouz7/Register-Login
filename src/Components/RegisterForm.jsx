import React, {useState} from 'react'
import { withTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';

const Register = ({t, onClose, openSuccess}) => {

    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        if(data.password !== data.confirmPassword){
            setError(t('register.!match'));
            return;
        }
        // console.log(data);
        onClose();
        openSuccess();
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-stone-800 rounded-md w-80 lg:w-1/4'>
                <div className='text-end text-stone-400 text-xl py-1 px-1.5'>
                    <button onClick={onClose}><FaTimes/></button>
                </div>
                <div>
                    <h1 className='text-stone-400 text-2xl text-center py-2'>{t('register.register')}</h1>
                </div>
                <form onSubmit={handleSubmit} className='p-4 flex flex-col space-y-3'>
                        <input 
                            type='text'
                            placeholder={t('register.fullname')}
                            required
                            onChange={(e) => setData((value) => ({...value, fullname: e.target.value}))}
                            className='bg-stone-300 text-stone-700 text-xl lg:text-base focus:outline-none rounded-sm p-0.5'
                        />
                        <input 
                            type='email' 
                            placeholder={t('register.email')}
                            required
                            onChange={(e) => setData((value) => ({...value, email: e.target.value}))}
                            className='bg-stone-300 text-stone-700 text-xl lg:text-base focus:outline-none rounded-sm p-0.5'
                        />
                        <input
                            type='password'
                            placeholder={t('register.password')}
                            required
                            onChange={(e) => setData((value) => ({...value, password: e.target.value}))}
                            className='bg-stone-300 text-stone-700 text-xl lg:text-base focus:outline-none rounded-sm p-0.5'
                        />
                        <input
                            type='password'
                            placeholder={t('register.confirmPassword')}
                            required
                            onChange={(e) => setData((value) => ({...value, confirmPassword: e.target.value}))}
                            className='bg-stone-300 text-stone-700 text-xl lg:text-base focus:outline-none rounded-sm p-0.5'
                        />
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <div className='text-center'>
                            <input type="submit" value={t('register.submit')} className='bg-stone-400 w-1/3 rounded-sm py-0.5 mt-5' />
                        </div>
                </form>   
            </div>
        </div>
    )
}

export default withTranslation()(Register);