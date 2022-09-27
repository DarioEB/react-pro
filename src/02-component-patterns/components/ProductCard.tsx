import { createContext, useContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div className={styles.productCard}>
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons
          counter={counter}
          increaseBy={increaseBy}
        /> */}
        { children }
      </div>
    </Provider>
  )
}
