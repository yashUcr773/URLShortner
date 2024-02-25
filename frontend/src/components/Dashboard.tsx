import { useRecoilValue } from "recoil"
import { flipAtom } from "../store/atom/URLS"
import { ShortnerComponent } from "./ShortnerComponent"
import { ResultComponent } from "./ResultComponent"


export function Dashboard() {

    const flip = useRecoilValue(flipAtom)

    return (
        <section className="h-full scene  w-[300px] xs:w-[400px] md:w-[500px] flex flex-col items-center justify-center relative">
            <div className={`w-full h-full relative card flex flex-col items-center justify-center  ${!flip ? "" : 'is-flipped'}`}>
                <div className={`card-face front w-full flex flex-col items-center justify-center`}>
                    <ShortnerComponent></ShortnerComponent>
                </div>
                <div className={`card-face back w-full flex flex-col items-center justify-center`}>
                    <ResultComponent></ResultComponent>
                </div>
            </div>
        </section>
    )
}
