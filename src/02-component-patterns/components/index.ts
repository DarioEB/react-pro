import { ProductCard as ProductCardHOC} from './ProductCard'

export { ProductButtons } from './ProductButtons';
import { ProductButtons } from './ProductButtons';

export { ProductImage } from './ProductImage';
import { ProductImage } from './ProductImage';

export { ProductTitle } from './ProductTitle';
import { ProductTitle } from './ProductTitle';
import { ProductCardHocProps } from '../interfaces/interfaces';


/* Asignar o expardir la propiedades de ProductCard */
export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage 
})

export default ProductCard