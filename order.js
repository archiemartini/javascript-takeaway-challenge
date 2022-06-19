class Order {

  constructor(menu) {
    this.menu = menu
    this.dishes = {}
  }

  addDish(dish, quantity) {
    if (!this.menu.isContainingDish(dish)) {
      throw new Error('You must provide a dish on the menu')
    }
    this.dishes[dish] = quantity
  }
}

module.exports = Order;