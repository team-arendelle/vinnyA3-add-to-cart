import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.scss';
// store
import { CartContext } from 'store/context';
import getProductInfo from 'utils/api';
// general
import DropdownSelect from 'components/dropdownSelect';
import optionGenerator from 'utils/optionGenerator';
import ProtectionPlan from './components/protectionPlan';
import CartButtons from './components/cartButtons';
import PrimeDetails from './components/primeDetails';
import InStock from './components/inStock';
// location api
import Location from './components/location';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      product: null,
      productReviews: null,
    };
  }

  componentDidMount() {
    getProductInfo.then(({ data }) =>
      this.setState({
        product: data.rows,
        productReviews: data.rRows,
      })
    );
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          parentState: this.state,
        }}
      >
        <div className={styles.container}>
          {this.state.product ? (
            <Fragment>
              <h3 className={styles.price}>
                <span className={styles.currency}>&#36;</span>
                {this.state.product.originalPrice}
              </h3>
              <PrimeDetails />
              <InStock />
              <p>
                Ships from and sold by {this.state.product.owningCompany}.{' '}
                {!!this.state.product.giftWrapAvail
                  ? 'Gift-wrap available.'
                  : ''}
              </p>
              <DropdownSelect type="Qty" children={optionGenerator(30)} />
              <CartButtons />
              <ProtectionPlan />
            </Fragment>
          ) : (
            ''
          )}
        </div>
      </CartContext.Provider>
    );
  }
}

export default Cart;
