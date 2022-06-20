class Menu {
  
  constructor(dishes) {
    this.dishes = dishes
  }

  showMenu() {
   return Object.keys(this.dishes).map((key) => {
    return `${key}: £${this.dishes[key].toFixed(2)}`
   }).join(", ");
  }

  isContainingDish(dish) {
    return this.dishes.hasOwnProperty(dish)
  }

  price(dish) {
    return this.dishes[dish]
  }
}

module.exports = Menu