import React, {useState} from 'react';
import { withTranslation } from 'react-i18next';

import i18n from 'i18next';
import Register from './RegisterForm';
import Login from './LoginForm';
import SuccessAlert from './SuccessAlert';



const Navbar = ({t}) => {

    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [successRegisterMessage, setRegisterSuccessMessage] = useState(false);
    const [successLoginMessage, setLoginSuccessMessage] = useState(false);

    const handleRegister = () => {
        setShowRegister(true);
    }

    const handleHideRegister = () => {
        setShowRegister(false);
    };

    const handleLogin = () => {
        setShowLogin(true);
    }

    const handleHideLogin = () => {
        setShowLogin(false);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-stone-600 text-white p-4">
            <button onClick={handleRegister}>{t('navbar.register')}</button>
            <select className={`p-2 rounded bg-stone-700 focus:outline-none ${i18n.language === 'en' ? '-ml-2.5 lg:-ml-6' : ''}`} onChange={(e) => changeLanguage(e.target.value)}>
                <option value='en'>English</option>
                <option value='id'>Indonesia</option>
            </select>
            <button onClick={handleLogin}>{t('navbar.login')}</button>
        </nav>
        {showRegister && <Register onClose={handleHideRegister} openSuccess={() => setRegisterSuccessMessage(true)}/>}
        {showLogin && <Login onClose={handleHideLogin} openSuccessMessage={() => setLoginSuccessMessage(true)}/>}
        {successRegisterMessage && <SuccessAlert message={t('register.success')} onClose={() => setRegisterSuccessMessage(false)}/> }
        {successLoginMessage && <SuccessAlert message={t('login.success')} onClose={() => setLoginSuccessMessage(false)}/> }
        </>
    );
};

export default withTranslation()(Navbar);


