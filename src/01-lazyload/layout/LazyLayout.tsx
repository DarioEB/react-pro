import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const LazyLayout = () => {

  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas hijas iran aquí */}
      <ul>
        {routes.map(({to, name}) => (
          <li
            key={to}
          >
            <NavLink
              to={to}
              className={({isActive}) => isActive ? 'nav-active' : ''}
            >{ name }</NavLink>
          </li>
        ))} 
      </ul>

      <Routes>
        {
          routes.map( ({path, Component}) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))
        }
        <Route path={"*"} element={<Navigate replace to={'lazy1'} />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;