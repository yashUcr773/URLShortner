import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { NotFound } from "./NotFound";
import { Dashboard } from "./Dashboard";

export function Main() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path='*' element={<Navigate to="/notfound" replace />}></Route>
            </Route>
        </Routes>
    )
}