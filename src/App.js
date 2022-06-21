import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import SideBar from './components/SideBar';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import StockPage from './pages/StockPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyInfoEdit from './pages/MyInfoEdit';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import PrivateRoute from './helpers/PrivateRoute';
import { AuthContext } from './contexts/Store';
import { useState } from 'react';
import {user} from './auth'
import ForbiddenRoute from './helpers/ForbiddenRoute';



function App() {
  const [auth, setAuth] = useState(false);
  const [user_id, setUser_id] = useState(undefined);
  const navigate = useNavigate();
  const login = (email, password) => {
    //요청
    if(email === user.email && password === user.password){
      setAuth(true);
      alert('welcome!');
      navigate('/');
    }
    else{
      alert('wrong!')
    }
  }
  const logout = () => {
    setAuth(false);
    setUser_id(3);
    navigate('/')
  }
  return (
    <AuthContext.Provider value={{auth, user_id, login, logout}}>
    <div className="App">
      <SideBar />
      <div className="wrap">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route element={<PrivateRoute />} >
            <Route path="mypage" element={<MyPage />} />
          </Route>
          <Route path = "stockpage/:stockId" element={<StockPage />} />
          <Route element={<ForbiddenRoute />}>
            <Route path = "signin" element={<Signin />} />
          </Route>
          <Route element={<ForbiddenRoute />}>
            <Route path = "signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute/>} >
            <Route path="myinfoedit" element={<MyInfoEdit />} />
          </Route>
          <Route path = "*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
    </AuthContext.Provider>

  );
}

export default App;
