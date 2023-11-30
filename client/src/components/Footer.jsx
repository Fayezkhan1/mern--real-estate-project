import React from 'react'
import { FaLinkedin, FaCode } from 'react-icons/fa';
export default function Footer() {
  return (
    // <footer className=' bg-gray-800 text-white p-4 '>
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', marginTop: 'auto' }}>
        <div className='flex flex-row justify-center'>
            <FaCode className='mt-2'/>

            <div className='mr-2 mt-1'>
                Developed by <a href="https://www.linkedin.com/in/fayezuddin-mohammed-khan-9291701bb/" target='_blank' rel='noopener noreferrer' className="text-blue-400 hover:text-blue-300">Fayezuddin Mohammed Khan</a>

            </div>
            <FaLinkedin className="mt-2" />
        </div>
    </footer>
  )
}
