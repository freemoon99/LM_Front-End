import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/Update" element={<UpdatePage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="*" element={<div>Not Found !</div>} />
      </Routes>
    </>
  );
}

export default App;

