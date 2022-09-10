import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './routes/Home'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
					<Routes>
						<Route path="/page1/*" element={<Home />} />
					</Routes>
				<Footer/>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
