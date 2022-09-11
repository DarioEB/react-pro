import { Suspense } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import logo from '../assets/react.svg';

import { routes } from './routes';
/*
  El componente Suspense se necesitan para renderizar
  un LazyExoticComponent, permite indicar a la interfaz que
  se está cargando un componente
  En fallback se debe especificar el componente de carga
  como por ejemplo un Spinner o Pantalla de espera
*/
export const Navigation = () => {

  return (
    <>
      <Suspense
        fallback={null}
      >
        <BrowserRouter>
          <div className='main-layout'>
            <nav>
              <img
                src={logo}
                alt='Logotipo React'
              />
              <ul>
                {
                  routes.map(({ to, name }) => (
                    <li
                      key={to}
                    >
                      <NavLink
                        to={to}
                        className={({ isActive }) => isActive ? 'nav-active' : ''}
                      >{name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>

            <Routes>
              {
                routes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />}
                  />
                ))
              }
              <Route path={'/*'} element={<Navigate to={routes[0].to} replace />} />
            </Routes>

          </div>
        </BrowserRouter>
      </Suspense>
    </>
  )
}