import { FormComponent } from "./FromComponent"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { URLSatom, flipAtom } from "../store/atom/URLS"
import { CONSTANTS } from "../../config/CONSTANTS"

export function ResultComponent() {

    const urls = useRecoilValue(URLSatom)
    const setFlip = useSetRecoilState(flipAtom)

    return (
        <div className="form-container w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-4 p-8 items-center justify-center dark:border-primary-500 border border-primary-500">

            <FormComponent formLabel={'GeneratedURL'} formValue={urls.completeURL} readonly={true}></FormComponent>
            <FormComponent formLabel={'ShortenedURL'} formValue={CONSTANTS.PRODURL + urls.shortenedURL} readonly={true}></FormComponent>

            <button
                onClick={() => { setFlip(false) }}
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-20 py-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex flex-row items-center justify-center gap-2">
                Generate More
            </button>
        </div>
    )
}