import './App.css';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className='wrap'>
        <Home />
      </div>
    </div>
  );
}

export default App;
