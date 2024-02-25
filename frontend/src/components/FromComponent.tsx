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

    return (
        <div className="form-component flex flex-col gap-1 w-full">
            <label
                htmlFor={formLabel}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {formLabel}
            </label>
            <div className="w-full flex flex-row gap-2">
                <input
                    type="text"
                    id={formLabel}
                    placeholder={placeHolder}
                    value={formValue}
                    onChange={(e) => formSetter(e.target.value)}
                    disabled={readonly}
                    className="bg-gray-50 cursor-text border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {formLabel == 'ShortenedURL' ?
                    <div className="flex flex-row gap-2 p-2">
                        <Tooltip id="my-tooltip" />
                        <button
                            onClick={() => { copyLink() }}
                            className="text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg p-2 inline-flex items-center justify-center bg-white border-gray-200 border">
                            <a data-tooltip-id="my-tooltip"
                                data-tooltip-content={copy ? 'Copy' : 'Copied'}>
                                <Copy />
                            </a>
                        </button>
                        <button
                            onClick={() => { launchLink() }}
                            className="text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg p-2 inline-flex items-center justify-center bg-white border-gray-200 border">
                            <a data-tooltip-id="my-tooltip" data-tooltip-content='Launch Link'>
                                <Launch />
                            </a>
                        </button>
                    </div> :
                    null}
            </div>
        </div>
    );
}
