import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"

const AppRouter = (): React.JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter