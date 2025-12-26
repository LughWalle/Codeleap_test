import { BrowserRouter, Routes, Route } from 'react-router';
import MainPage from '../pages/mainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
