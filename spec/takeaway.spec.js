const Takeaway = require('../takeaway')
const Menu = require('../menu')
const Order = require('../order')


describe('Takeaway class', () => {

  let food_menu = {
    'Prawn Toast': 4.50,
    'Singapore Vermicelli': 7.00,
    'Salt and Pepper Squid': 7.50
  }
  let menu = new Menu(food_menu)
  let order = new Order(menu)
  
  let dishes = { 'Prawn Toast': 2, 'Singapore Vermicelli': 1, 'Salt and Pepper Squid': 1}


  let takeaway;
  beforeEach(function () {
    takeaway = new Takeaway(menu, order)
  });

  it('shows the menu with the dishes and prices', () => {
    expect(takeaway.printMenu()).toEqual("Prawn Toast: £4.50, Singapore Vermicelli: £7.00, Salt and Pepper Squid: £7.50")
  })

  // it('is capable of ordering a number of dishes from menu', () => {
  //   expect(takeaway.placeOrder(dishes)).toEqual("Your order is for £23.50")
  // })
})