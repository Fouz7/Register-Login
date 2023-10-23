import { FaTimes } from 'react-icons/fa'


const SuccessAlert = ({message, onClose}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='bg-stone-800 rounded-md w-80 lg:w-1/4'>
            <div className='text-end text-stone-400 text-xl py-1 px-1.5'>
                <button onClick={onClose}><FaTimes/></button>
            </div>
            <div >
                <h1 className='text-stone-400 text-2xl text-center pb-9'>{message}</h1>
            </div>
        </div>
    </div>
  )
}

export default SuccessAlert