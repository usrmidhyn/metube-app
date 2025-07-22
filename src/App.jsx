import { Route, Routes } from 'react-router-dom';
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import WatchHistory from './pages/WatchHistory/WatchHistory';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
    <Header/>
    <Routes>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/' element={<LandingPage/>}></Route>
     <Route path='/PageNotFound' element={<PageNotFound/>}></Route>
     <Route path='/watch-history' element={<WatchHistory/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
