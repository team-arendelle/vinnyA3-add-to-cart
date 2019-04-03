import React, { Component } from 'react';
import { CartContext } from 'store/context';
import styles from './styles.scss';
import Tooltip from 'components/tooltip';

class PrimeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };

    this.myRef = this.myRef || React.createRef();
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  render() {
    return this.context.parentState.product.primeEligible ? (
      <div className={styles.details} ref={this.myRef}>
        <p>
          <a href="#" onClick={this.toggleTooltip}>
            FREE Shipping
          </a>{' '}
          on orders over $25&mdash;or get <b>FREE Two-Day Shipping</b> with{' '}
          <a href="#">Amazon Prime</a>
          <Tooltip
            open={this.state.showTooltip}
            onClose={this.toggleTooltip}
            myRef={this.myRef}
          >
            <h3>Get free shipping</h3>
            <p>
              <b>Free 5-8 business-day shipping</b> within the U.S. when you
              order &#36;25 of eligible items sold or fulfilled by Amazon
            </p>
            <p>
              Or get 4-5 business-day shipping on this item for &#36;5.99.
              (Prices may vary for AK and HI.)
            </p>
            <a href="#">Learn more about free shipping</a>
          </Tooltip>
        </p>
      </div>
    ) : (
      <Fragment>
        <p>
          <b>&amp; Free Shipping</b>.&nbsp;<a href="#">Details.</a>
        </p>
        <p>
          <b>Want it tomorrow, Feb 13?</b>Order within 22hrs and 2mins and chose{' '}
          <b>One-Day shipping</b> at checkout. <a href="#">Details.</a>
        </p>
      </Fragment>
    );
  }
}

PrimeDetails.contextType = CartContext;
export default PrimeDetails;
