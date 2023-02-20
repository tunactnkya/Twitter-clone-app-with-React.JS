import React from 'react'

const Profile = () => {
    return (
        <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200 ' >
            <img src='https://media.licdn.com/dms/image/D4D03AQEaEir4ax6hkg/profile-displayphoto-shrink_800_800/0/1674741339133?e=1682553600&v=beta&t=wN5Bon4uIxWcGUxB2Qz_QN4-xlIusiiXq50eV6-QsSM'
                alt='Profile'
                className='w-11 h-11 rounded-full ' />

            <div className='flex flex-col' >
                <span className='font-bold text-md text-black' >Tunahan Çetinkaya </span>
                <span className='text-sm text-gray-dark '>@tnctnkya</span>
            </div>

            <div className='flex space-x-1 ' >
                <div className='w-1 h-1 bg-gray-700 rounded-full ' />
                <div className='w-1 h-1 bg-gray-700 rounded-full ' />
                <div className='w-1 h-1 bg-gray-700 rounded-full ' />
            </div>
        </div>
    )
}

export default Profile;