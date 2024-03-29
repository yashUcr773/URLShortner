import { Link } from "react-router-dom";
import { HeartBeat } from "../assets/Heart";
import { React } from "../assets/React";
import { HeaderLinks } from "./HeaderLinks";

export function Footer() {
    return (
        <footer className="rounded-lg m-4">
            <div className="w-full max-w-screen-xl mx-auto p-2">
                <div className="flex items-center justify-center">
                    <Link to="/" className="logo flex flex-row gap-2 justify-center items-center mb-0">
                        <img src="/logo.png" alt="Logo" className="size-4" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-500">SHTR.</span>
                    </Link>
                </div>
                <div className="relative flex flex-row items-center justify-center">
                    Made with <HeartBeat /> using < React />
                </div>
                <hr className="my-2 border-gray-200 mx-auto dark:border-gray-700" />
                <div className="flex flex-col xs:flex-row gap-4 items-center justify-center">
                    <HeaderLinks></HeaderLinks>
                    <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}