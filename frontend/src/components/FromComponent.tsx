export function FormComponent({ formLabel, placeHolder, formValue, formSetter, readonly }: any) {
    return <div className="form-component flex flex-col gap-2 w-full">
        <label className="font-semibold text-xl">{formLabel}</label>
        <input className="border border-black p-4" placeholder={placeHolder} value={formValue} onChange={(e) => formSetter(e.target.value)} readOnly={readonly}></input>
    </div>
}