import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import Header from "../components/layout/Header"

const AppRouter = (): React.JSX.Element => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter