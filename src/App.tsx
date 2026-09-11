import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Home } from '@/pages/Home';
import { Empresas } from '@/pages/Empresas';
import { Clientes } from '@/pages/Clientes';
import { Industrias } from '@/pages/Industrias';
import { Contacto } from '@/pages/Contacto';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="empresas" element={<Empresas />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="industrias" element={<Industrias />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

