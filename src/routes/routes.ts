import { lazy, LazyExoticComponent } from 'react';
import {
  NoLazyPage,
  LazyPage1,
  LazyPage2,
  LazyPage3
} from '../01-lazyload/pages';
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
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    name: 'Lazy Page 1'
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    name: 'Lazy Page 2'
  },
  {
    to: 'lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'Lazy Page 3'
  },
]

export const lRoutes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyPage,
    name: 'No Lazy Page'
  }
]