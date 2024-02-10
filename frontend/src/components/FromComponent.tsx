import { useState } from "react";
import { Copy } from "../assets/Copy";
import { Launch } from "../assets/Launch";
import { Tooltip } from 'react-tooltip'

export function FormComponent({ formLabel, placeHolder, formValue, formSetter, readonly }: any) {

    const [copy, setCopy] = useState(true)

    function copyLink() {
        navigator.clipboard.writeText(formValue)
        setCopy(false)
        setTimeout(() => {
            setCopy(true)
        }, 2000)
    }

    function launchLink() {
        window.open(formValue, '_blank', 'noreferrer')
    }

    return <div className="form-component flex flex-col gap-2 w-full">
        <label className="font-semibold text-xl">{formLabel}</label>
        <div className="w-full flex flex-row gap-2">

            <input className={`border border-black w-full rounded-lg p-4 ${readonly ? "bg-gray-200" : ""}`} placeholder={placeHolder} value={formValue} onChange={(e) => formSetter(e.target.value)} readOnly={readonly}></input>
            {formLabel == 'ShortenedURL' ?
                <div className="flex flex-row gap-2 p-2">
                    <Tooltip id="my-tooltip" />
                    <button onClick={(e) => { copyLink() }} className="border border-black p-2 rounded-lg bg-gray-200"><a data-tooltip-id="my-tooltip" data-tooltip-content={copy ? 'Copy' : 'Copied'}><Copy /></a></button>
                    <button onClick={(e) => { launchLink() }} className="border border-black p-2 rounded-lg bg-gray-200"> <a data-tooltip-id="my-tooltip" data-tooltip-content='Launch Link'><Launch /></a></button>
                </div> :
                null}
        </div>
    </div>
}