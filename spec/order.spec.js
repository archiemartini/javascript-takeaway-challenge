const Order = require('../order')
const Menu = require('../menu')

describe('Order class', () => {
  
  let food_menu = {
    'Prawn Toast': 4.50,
    'Singapore Vermicelli': 7.00,
    'Salt and Pepper Squid': 7.50
  }
  let menu = new Menu(food_menu)
  
  let order;
  beforeEach(function () {
    order = new Order(menu)
  });

  let dishes = {
    'Prawn Toast': 2,
    'Singapore Vermicelli': 1,
    'Salt and Pepper Squid': 1
  }

  it('selects several dishes from the menu', () => {
    order.addDish('Prawn Toast', 2)
    order.addDish('Singapore Vermicelli', 1)
    order.addDish('Salt and Pepper Squid', 1)
    expect(order.dishes).toEqual(dishes)
  })

  it('doesn\'t allow items that are not on the menu to be added', () => {
    expect(() => {order.addDish('Chicken Tikka Masala', 1)}).toThrowError('You must provide a dish on the menu')
  })

  it('calculates the total for the order', () => {
    order.addDish('Prawn Toast', 2)
    order.addDish('Singapore Vermicelli', 1)
    total = 15.00
    expect(order.total()).toEqual(16.00)
  })
})