import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import SideBar from './components/SideBar';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import StockPage from './pages/StockPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="wrap">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "mypage" element={<MyPage />} />
          <Route path = "stockpage/:stockId" element={<StockPage />} />
          <Route path = "signin" element={<Signin />} />
          <Route path = "signup" element={<Signup />} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
