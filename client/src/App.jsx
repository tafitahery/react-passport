import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './app.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Post from './pages/Post';
import Home from './pages/Home';

function App() {
  const user = true;

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/post/:id"
          element={user ? <Post /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
