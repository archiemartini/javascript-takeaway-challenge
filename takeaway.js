
class Takeaway {


  constructor(menu, order) {
    this.menu = menu
    this.order = order

  }

  printMenu() {
    return this.menu.showMenu()
  }

  placeOrder(dishes) {
    for (const dish in dishes) {
      this.order.addDish(dish, dishes[dish])
    }
  }
}

module.exports = Takeaway;