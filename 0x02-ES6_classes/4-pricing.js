import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Validate the type of amount
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    // Validate the type of currency
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  // Sets the amount of the price.
  set amount(a) {
    if (typeof a !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = a;
  }
  // Gets the currency of the price.

  get currency() {
    return this._currency;
  }

  // Sets the currency of the price.
  set currency(c) {
    if (!(c instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = c;
  }

  // Returns the full price representation in the format "amount currency_name (currency_code)
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // Converts the given amount to a different currency based on the conversion rate.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
