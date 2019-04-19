import React, { Component } from 'react';
import { CartContext } from 'store/context';
import styles from './styles.scss';
import ProtectionModal from './components/protectionModal';

class ProtectionPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  render() {
    const {
      protectionPlan,
      protectionPlanPricingOptionOne,
      protectionPlanPricingOptionTwo,
    } = this.context.parentState.product;

    return protectionPlan ? (
      <>
        <h4>Add a Protection Plan:</h4>
        <form>
          <input
            id="protection-first"
            type="checkbox"
            name="protection"
            checked
          />
          <label htmlFor="protection-first">
            <a href="#" onClick={this.toggleModal}>
              4-Year Protection
            </a>{' '}
            for{' '}
            <span className={styles.protectionPrice}>
              <span>&#36;</span>
              {protectionPlanPricingOptionOne}
            </span>
          </label>
          <br />
          <input id="protection-second" type="checkbox" name="protection" />
          <label htmlFor="protection-second">
            <a href="#" onClick={this.toggleModal}>
              3-Year Protection
            </a>{' '}
            for{' '}
            <span className={styles.protectionPrice}>
              <span>&#36;</span>
              {protectionPlanPricingOptionTwo}
            </span>
          </label>
        </form>
        <ProtectionModal
          showModal={this.state.showModal}
          onClose={this.toggleModal}
          product={this.context.parentState.product}
        />
      </>
    ) : (
      ''
    );
  }
}

ProtectionPlan.contextType = CartContext;
export default ProtectionPlan;
