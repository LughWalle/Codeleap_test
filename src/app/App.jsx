import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AppLoader } from '../components';
const MainPage = lazy(() => import('../pages/mainPage'));
const LoginPage = lazy(() => import('../pages/login'));

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('username') || '');
  
  const handleLogout = () => {
    setCurrentUser('');
    localStorage.removeItem('username');
  };
  useEffect(() => {
    if (!currentUser) localStorage.removeItem('username');
  }, [currentUser]);

  return (
    <BrowserRouter>
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/main" replace /> : <LoginPage onLogin={setCurrentUser} />}
        />
        <Route
          path="/main"
          element={currentUser ? <MainPage currentUser={currentUser} onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to={currentUser ? "/main" : "/"} replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}