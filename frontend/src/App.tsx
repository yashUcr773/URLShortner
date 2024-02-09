import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'

function App() {

    return <>
        <RecoilRoot>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/notfound" element={<NotFound />}></Route>
                    <Route path='*' element={<Navigate to="/" replace />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </RecoilRoot>
    </>

}

export default App
