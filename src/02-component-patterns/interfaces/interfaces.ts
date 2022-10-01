import { Props as ProductCardProps } from '../components/ProductCard';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHocProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title:    ( Props: ProductTitleProps ) => JSX.Element;
  Image:    ( Props: ProductImageProps ) => JSX.Element;
  Buttons:  ( Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}