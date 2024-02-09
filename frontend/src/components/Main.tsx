import { useRecoilValue } from "recoil";
import { ResultComponent } from "./ResultComponent";
import { ShortnerComponent } from "./ShortnerComponent";
import { flipAtom } from "../store/atom/URLS";

export function Main() {

    const flip = useRecoilValue(flipAtom)

    return <main style={{ minHeight: 'calc(100vh)' }} className="bg-blue-300 flex flex-col items-center justify-center">
        {!flip ? <ShortnerComponent></ShortnerComponent>
            : <ResultComponent></ResultComponent>}
    </main>
}