import axios from "axios"
import { useEffect, useState } from "react"
import { CONSTANTS } from '../../config/CONSTANTS.js'
import { Loader } from "./Loader.js"
import { FormComponent } from "./FromComponent.js"
import { useRecoilState, useSetRecoilState } from "recoil"
import { URLSatom, flipAtom } from '../store/atom/URLS.js'

export function ShortnerComponent() {

    const [completeURL, setCompleteURL] = useState("")
    const [alias, setAlias] = useState("")
    const [apiFeedback, setApiFeedback] = useState('')
    const [apiFeedbackSuccess, setApiFeedbackSuccess] = useState(false)
    const [networkCallProgress, setNetworkCallProgress] = useState(false)
    const setURLS = useSetRecoilState(URLSatom)
    const [flip, setFlip] = useRecoilState(flipAtom)

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
        setCompleteURL("")
        setApiFeedback("")
        setNetworkCallProgress(false)
    }, [flip])

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

    return <div className="w-full form-container bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-4 p-8 items-center justify-center">
        <FormComponent formLabel={'Complete URL (starting with https://)'} placeHolder={'https://yashaggarwal.dev'} formValue={completeURL} formSetter={setCompleteURL}></FormComponent>
        <FormComponent formLabel={'Alias  (' + CONSTANTS.PRODURL + ')'} placeHolder={alias} formValue={alias} formSetter={setAlias}></FormComponent>
        {
            apiFeedback ?
                apiFeedbackSuccess ?
                    <div className="text-sm text-green-800 rounded-lg dark:text-green-400" role="alert">
                        {apiFeedback}
                    </div> :
                    <div className="text-sm text-red-800 rounded-lg dark:text-red-400" role="alert">
                        {apiFeedback}
                    </div>
                : null}
        <button
            onClick={() => { generateShortURL() }}
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-20 py-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex flex-row items-center justify-center gap-2">
            Generate {networkCallProgress ? <Loader></Loader> : null}
        </button>
    </div>

}
