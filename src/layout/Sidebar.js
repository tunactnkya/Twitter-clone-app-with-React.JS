import React, { useState } from 'react'
import Profile from '../components/Profile'
import SideLink from '../components/SideLink'
import {
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon,
} from '../icon/icons'
import twitterLogo from '../images/twitter.svg'

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notifications",
        icon: NotificationsIcon
    },
    {
        name: "Messages",
        icon: MessagesIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon
    },
    {
        name: "Lists",
        icon: ListsIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },
]


const Sidebar = () => {

    //Seçili Cursor Pointer
    const [active, setActive] = useState("Home")

    const handleMenuItemClick = (name) => {
        setActive(name);
    }
    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2' >
            <div>
                <div className=' mt-1 flex ml-3 items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100' >
                    <img src={twitterLogo} alt="Twitter logo" />
                </div>
                <nav className='mb-4' >
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
                        ))}
                    </ul>
                </nav>
                <button className='bg-primary-base hover:bg-primary-dark shadow-lg text-white rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 ' >Tweet</button>
            </div>
            <Profile />
        </div>
    )
}

export default Sidebar;