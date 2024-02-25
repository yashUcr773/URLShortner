import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { flipAtom } from "../store/atom/URLS"
import { useEffect, useState } from "react"

export function Header() {
    const navigate = useNavigate()
    const setFlip = useSetRecoilState(flipAtom)
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('color-theme') === 'dark' ||
        (!localStorage.getItem('color-theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }, [isDarkMode]);

    function navigateHome() {
        navigate('/'); setFlip(false)
    }
    const toggleTheme = () => {
        setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    };

    return (
        <header>
            <nav className="h-fit flex items-center justify-center p-4">
                <div className="flex flex-col xs:flex-row gap-2 justify-between items-center mx-auto w-full">

                    <span onClick={navigateHome}
                        className="self-center cursor-pointer text-xl font-semibold whitespace-nowrap text-primary-500 flex flex-row  justify-center items-center">
                        <img src="/logo.png" alt="Logo" className="size-4 mr-2" />
                        SHTR. &nbsp;
                        <span className="text-xs text-gray-800 dark:text-white mt-1.5">
                            URL Shortner
                        </span>
                    </span>


                    <div className="flex flex-row gap-4 items-center justify-center ">
                        <button id="theme-toggle" type="button" onClick={toggleTheme}
                            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1">
                            <svg id="theme-toggle-dark-icon" className={`size-6 ${!isDarkMode ? '' : 'hidden'}`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" className={`size-6 ${isDarkMode ? '' : 'hidden'}`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </button>

                    </div>

                </div>
            </nav>
        </header>
    )
}