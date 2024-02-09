import { FormComponent } from "./FromComponent"
import { useRecoilValue } from "recoil"
import { URLSatom } from "../store/atom/URLS"

export function ResultComponent() {

    const urls = useRecoilValue(URLSatom)

    return <div className="m-8 form-container w-full sm:w-[500px] bg-emerald-200 border border-black rounded-lg shadow-lg flex flex-col gap-8 p-8 items-center justify-center">
        <FormComponent formLabel={'GeneratedURL'} formValue={urls.completeURL} readonly={true}></FormComponent>
        <FormComponent formLabel={'ShortenedURL'} formValue={urls.shortenedURL} readonly={true}></FormComponent>
        <button onClick={() => { }} className="border border-black p-4 w-full bg-black text-white  text-lg rounded-lg  flex flex-row items-center justify-center h-16 gap-4">Generate More</button>
    </div>

}