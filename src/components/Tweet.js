import React, { useState } from 'react'
import { ImageIcon, GIFIcon, PollIcon, ScheduleIcon, EmojiIcon } from '../icon/icons'

const Tweet = () => {
    const [content, setContent] = useState("")

  
    return (
        <div className='flex-1 flex flex-col mt-2 px-2' >
            <textarea
                className="w-full text-xl placeholder-gray-dark  outline-none overflow-hidden resize-none bg-transparent"
                placeholder='Whats Happening?'
                onChange={e => setContent(e.target.value)}
                value={content}
            />
            <div className='flex items-center justify-between' >
                <div className='flex -ml-3' >
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100' >
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100' >
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100' >
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100' >
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100' >
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>
                <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' >Tweet</button>
            </div>
        </div>
    )
}

export default Tweet;