import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
// Pages
import SubpgInspire from "../pages/SubpgInspire";
import SubpgHeritage from "../pages/SubpgHeritage";
import SubpgNewbeauty from '../pages/SubpgNewbeauty';
import SubpgEsg from "../pages/SubpgEsg";
import SubpgPress from "../pages/SubpgPress";

const AppRouter = (): React.JSX.Element => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />}/>
				<Route path="/inspire" element={<SubpgInspire />}/>
				<Route path="/heritage" element={<SubpgHeritage />}/>
				<Route path="/newbeauty" element={<SubpgNewbeauty />}/>
				<Route path="/esg" element={<SubpgEsg />}/>
				<Route path="/press" element={<SubpgPress />}/>
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default AppRouter