import './App.css'
import { Main } from './components/Main'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <RecoilRoot>
                    <Main></Main>
                </RecoilRoot>
            </BrowserRouter>
        </>
    )
}
