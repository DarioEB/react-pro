import { lazy, LazyExoticComponent } from 'react';

// Definimos el tipo para especificar en la interfaz
type JSXComponent = () => JSX.Element;

/* 
  El componente a renderizar puede 
  ser LazyExoticComponent<> o JSX.Element 
*/
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

/*
  Los componentes que se renderizan con React.lazy()
  necesitan una exportación por default
  webpackChunkName: especifica el nombre del archivo con el que
  se carga el componente en el bundle
*/
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy Page 1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy Page 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy Page 3'
  },
]