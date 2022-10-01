import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs ) => {

  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange); /* ¿¿Esta siendo controlado?? */

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      // El signo de admiración le asegura a javascript que siempre va a tener una función
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({count: newValue, product});
  }

  useEffect(() => {
    setCounter(value);
  }, [value]);


  return {
    counter,
    increaseBy
  }
}