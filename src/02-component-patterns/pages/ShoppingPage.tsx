import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'

import '../styles/custom-styles.css';

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
          <ProductCard.Image
            className='custom-image'
          />
          <ProductCard.Title
            title={'Hola Mundo Cruel'}
            className='text-bold'
          />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product2}
          className={'bg-dark text-white'}
        >
          <ProductImage className={'custom-image'} />
          <ProductTitle className={'text-white'} />
          <ProductButtons className={'custom-buttons'} />
        </ProductCard>

        <ProductCard
          product={ product2 }
          style={{
            backgroundColor: '#70d1f8'
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}