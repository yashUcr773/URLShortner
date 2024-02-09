import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { RecoilRoot } from 'recoil'

function App() {

    return <>
        <RecoilRoot>
            <Header />
            <Main />
            <Footer />
        </RecoilRoot>
    </>

}

export default App
