import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { flipAtom } from "../store/atom/URLS"

export function Header() {
    const navigate = useNavigate()
    const setFlip = useSetRecoilState(flipAtom)

    return <header onClick={() => { navigate('/'); setFlip(false) }}
        className="bg-emerald-950 w-full h-20 flex  cursor-pointer justify-center items-center text-white text-4xl font-bold tracking-wide">URL Shortner</header>
}