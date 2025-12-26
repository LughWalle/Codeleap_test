import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/login';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('username') || '');

  useEffect(() => {
    if (!currentUser) localStorage.removeItem('username');
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/main" replace /> : <LoginPage onLogin={setCurrentUser} />}
        />
        <Route
          path="/main"
          element={currentUser ? <MainPage currentUser={currentUser} /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to={currentUser ? "/main" : "/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}