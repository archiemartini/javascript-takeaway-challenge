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

  total() {
    return this.itemPrices().reduce( (x,y) => x+y, 0)
  }
  
  itemPrices() {
    let item_prices = []
    for (let dish in this.dishes) {
      item_prices.push(this.menu.price(dish) * this.dishes[dish])
    }
    return item_prices
  }
}


module.exports = Order;