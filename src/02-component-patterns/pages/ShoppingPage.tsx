import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

const product2 = {
  id: '2',
  title: 'Coffee Mug 2 - Card',
  img: './coffee-mug.png',
}


export const ShoppingPage = () => {


  return (
    <div>
      <h1>
        Shopping Store
      </h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product2}>
          <ProductCard.Image />
          <ProductCard.Title title={'Hola Mundo Cruel'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product2}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}