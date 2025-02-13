import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';
import Erro from './pages/Erro';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/morada" element={<Home />}></Route>
        <Route path="/morada/obrigado" element={<Obrigado />}></Route>
        <Route path="*" element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
