import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { flipAtom } from "../store/atom/URLS"
import { HeaderLinks } from "./HeaderLinks"

export function Header() {
    const navigate = useNavigate()
    const setFlip = useSetRecoilState(flipAtom)

    return <header onClick={() => { navigate('/'); setFlip(false) }}
        className="bg-emerald-950 w-full h-20 flex px-2 sm:px-10 cursor-pointer justify-between items-center text-white text-4xl font-bold tracking-wide">
        <div></div>
        URL Shortner
        <HeaderLinks></HeaderLinks>
    </header>
}