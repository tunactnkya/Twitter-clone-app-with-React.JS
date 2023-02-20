import React from 'react'
import { PopulerIcon } from '../icon/icons'
import Tweet from '../components/Tweet'
import Divider from '../components/Divider'

const Content = () => {
    return (
        <main className='flex-1  flex flex-col border-r border-l border-gray-extralight' >
            <header className='flex justify-between items-center  p-4 border-b border-gray-extralight bg-white sticky top-0 z-10 '  >
                <span className='font-bold text-xl text-gray-900 ' >Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className='flex px-4 py-3 space-x-4' >
                <img src='https://media.licdn.com/dms/image/D4D03AQEaEir4ax6hkg/profile-displayphoto-shrink_800_800/0/1674741339133?e=1682553600&v=beta&t=wN5Bon4uIxWcGUxB2Qz_QN4-xlIusiiXq50eV6-QsSM'
                    alt='Profile'
                    className='w-11 h-11 rounded-full ' />
                <Tweet />
            </div>
            <Divider/>
        </main>
    )
}

export default Content