import { FormComponent } from "./FromComponent"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { URLSatom, flipAtom } from "../store/atom/URLS"
import { CONSTANTS } from "../../config/CONSTANTS"

export function ResultComponent() {

    const urls = useRecoilValue(URLSatom)
    const setFlip = useSetRecoilState(flipAtom)

    return <div className="m-8 form-container w-full sm:w-[500px] bg-emerald-200 border border-black rounded-lg shadow-lg flex flex-col gap-8 p-8 items-center justify-center">
        <FormComponent formLabel={'GeneratedURL'} formValue={urls.completeURL} readonly={true}></FormComponent>
        <FormComponent formLabel={'ShortenedURL'} formValue={CONSTANTS.PRODURL + urls.shortenedURL} readonly={true}></FormComponent>

        <button onClick={() => { setFlip(false) }} className="border border-black p-4 w-full bg-black text-white  text-lg rounded-lg  flex flex-row items-center justify-center h-16 gap-4">Generate More</button>
    </div>

}