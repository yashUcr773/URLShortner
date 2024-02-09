import { ResultComponent } from "./ResultComponent";
import { ShortnerComponent } from "./ShortnerComponent";

export function Main() {
    return <main style={{ minHeight: 'calc(100vh - 250px)' }} className="bg-blue-300 flex flex-col items-center justify-center">
        <ShortnerComponent></ShortnerComponent>
        <ResultComponent></ResultComponent>
    </main>
}