import React from 'react';
import { CartContext } from 'store/context';
import styles from './styles';

const InStock = () => (
  <CartContext.Consumer>
    {context => {
      const { numInStock } = context.parentState.product;
      return numInStock > 20 ? (
        <h4 className={styles.inStock}>In Stock.</h4>
      ) : (
        'NA - Coming soon...'
      );
    }}
  </CartContext.Consumer>
);

export default InStock;
