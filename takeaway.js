const Order = require('./order')
const Sms = require('./sms')

class Takeaway {


  constructor(menu, order, sms) {
    this.menu = menu
    this.order = order || new Order(menu)
    this.sms = sms || new Sms()

  }
  printMenu() {
    return this.menu.showMenu()
  }

  placeOrder(dishes) {
    for (let dish in dishes) {
      this.order.addDish(dish, dishes[dish])
    }
    let orderConfirmation = `The total of this order came to £${this.order.total().toFixed(2)}`
    this.sms.sendText(orderConfirmation)
    return orderConfirmation;
  }
}

module.exports = Takeaway;