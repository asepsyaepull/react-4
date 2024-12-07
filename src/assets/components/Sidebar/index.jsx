import React from 'react'
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const number = 1;


const Sidebar = ({ isOpen, handleSidebar, handleAdd, count }) => {
    return (
        <div className='flex justify-start items-start'>
            <div className={`h-screen bg-gray-800 text-white ${isOpen ? 'w-96' : 'w-0'}`}>
                <div className='flex justify-between p-4'>
                    <h1 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Sidebar</h1>
                    <button onClick={handleSidebar} className="text-white">
                        {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
                    </button>
                </div>
                <ul className={`space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#home" className="block py-2 px-4 hover:bg-gray-700">Home</a></li>
                    <li><a href="#services" className="block py-2 px-4 hover:bg-gray-700">Services</a></li>
                    <li><a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
                    <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a></li>
                </ul>
            </div>
            <div className='flex m-4'>
                <button onClick={handleSidebar} className="text-black">
                    {isOpen || <GoSidebarCollapse />}
                </button>
            </div>
            <div className='flex gap-8 m-4'>
                <h1>Counter: {count}</h1>
                <button onClick={() => handleAdd(number)} className="text-black">
                    {isOpen || 'Tambah'}
                </button>
            </div>
        </div>
    )
}

export default Sidebar