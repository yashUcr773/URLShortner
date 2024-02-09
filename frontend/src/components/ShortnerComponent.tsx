import axios from "axios"
import { useEffect, useState } from "react"
import { CONSTANTS } from '../../config/CONSTANTS.js'
import { Loader } from "./Loader.js"
import { FormComponent } from "./FromComponent.js"
import { useSetRecoilState } from "recoil"
import { URLSatom, flipAtom } from '../store/atom/URLS.js'

export function ShortnerComponent() {

    const [completeURL, setCompleteURL] = useState("")
    const [alias, setAlias] = useState("")
    const [apiFeedback, setApiFeedback] = useState('')
    const [apiFeedbackSuccess, setApiFeedbackSuccess] = useState(false)
    const [networkCallProgress, setNetworkCallProgress] = useState(false)
    const setURLS = useSetRecoilState(URLSatom)
    const setFlip = useSetRecoilState(flipAtom)

    useEffect(() => {

        function generateRandomAlias(size: number) {
            let ans = []
            let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

            for (let i = 0; i < size; i++) {
                let random = Math.round(Math.random() * (alphabet.length + 1))
                ans.push(alphabet[random])
            }
            return ans.join('')

        }
        setAlias(generateRandomAlias(6))
    }, [])

    async function generateShortURL() {
        try {
            setNetworkCallProgress(true)
            let response = await axios.post(CONSTANTS.APIBASEURL + '/shorten', { shortenedURL: alias, completeURL })

            setURLS({
                completeURL: response.data.url.completeURL,
                shortenedURL: response.data.url.shortenedURL
            })

            setApiFeedback(response.data.message)
            setNetworkCallProgress(false)
            setApiFeedbackSuccess(true)
            setFlip(true)
        } catch (e: any) {
            setApiFeedback(e.response.data.message)
            setNetworkCallProgress(false)
            setApiFeedbackSuccess(false)
            console.log(e)
        }
    }

    return <div className="m-8 form-container w-full sm:w-[500px] bg-emerald-200 border border-black rounded-lg shadow-lg flex flex-col gap-8 p-8 items-center justify-center">
        <FormComponent formLabel={'Complete URL'} placeHolder={'https://yashaggarwal.dev'} formValue={completeURL} formSetter={setCompleteURL}></FormComponent>
        <FormComponent formLabel={'Alias  (' + CONSTANTS.PRODURL + ')'} placeHolder={alias} formValue={alias} formSetter={setAlias}></FormComponent>
        <span className={`network-feedback mt-4 font-bold text-xl ${apiFeedbackSuccess ? 'text-green-600' : 'text-red-500'}`}>{apiFeedback}</span>
        <button onClick={() => { generateShortURL() }} className="border border-black p-4 w-full bg-black text-white  text-lg rounded-lg  flex flex-row items-center justify-center h-16 gap-4">Generate {networkCallProgress ? <Loader></Loader> : null}</button>
    </div>

}

