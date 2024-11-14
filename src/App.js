import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/home/style.css'
import './components/style.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer'
import NavBar from './components/navBar'
import Home from './pages/home/home'


function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
