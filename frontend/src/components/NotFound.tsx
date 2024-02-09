import { useNavigate } from "react-router-dom"

export function NotFound() {
    
    const navigate = useNavigate()

    return <main style={{ minHeight: 'calc(100vh)' }} className="bg-blue-300 flex flex-col items-center justify-center gap-20">
        <span className="text-3xl font-bold ">
            The Short URL either expired or was not created.
        </span>
        <button onClick={() => {navigate('/')}} className="border border-black p-8 px-16 m-4 rounded-2xl bg-black text-2xl text-white">Go Back</button>
    </main>
}