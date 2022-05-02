import './App.css';
import SideBar from './components/SideBar';
import Home from './pages/Home';
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
