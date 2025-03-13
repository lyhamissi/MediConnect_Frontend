import React, { useEffect, useState } from 'react'
import '../dashboardstyles/topbar.css';
import { IoMdSunny } from 'react-icons/io';
import { LuMoonStar } from 'react-icons/lu';
import { MdNotifications } from "react-icons/md";
const NurseNavbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkTheme(true);
            document.body.classList.add('dark-theme');
        } else {
            setIsDarkTheme(false);
            document.body.classList.add('light-theme');
        }
    }, []);
    const toggleTheme = () => {
        setIsDarkTheme((prev) => {
            const newTheme = !prev;
            document.body.classList.toggle('dark-theme', newTheme);
            document.body.classList.toggle('light-theme', !newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };
    return (
        <div className={`navbars ${isDarkTheme ? 'dark' : 'light'}`}>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkTheme ? <IoMdSunny /> : <LuMoonStar />}
            </button>
            <MdNotifications className='notifications' />
        </div>
    )
}

export default NurseNavbar
