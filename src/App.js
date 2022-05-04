import './App.css';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import StockPage from './pages/StockPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <SideBar />
      <div className='wrap'>
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
