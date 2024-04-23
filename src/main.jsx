import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LenguajesBase from './datos/lenguajesBD.js'
import VistaLenguaje from './vistas/VistaLenguaje'


const router = [
  {
    path: '/',
    element: <App />
  },
];

LenguajesBase.forEach((len) => {
  router.push({
    path: len.nombre,
    
    element: <VistaLenguaje len={len} />,
    // element: <VistaLenguaje len={len} />,
  });
});

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
