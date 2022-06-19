const Takeaway = require('../takeaway')
const Menu = require('../menu')

jest.mock('../menu.js')
jest.mock('../order.js')

describe('Takeaway class', () => {

  const mockedMenu = {
    showMenu: () => "Prawn Toast: £4.50"
  }

  order = jest.fn()
  
  let dishes = { 'Prawn Toast': 2, 'Singapore Vermicelli': 1, 'Salt and Pepper Squid': 1}


  let takeaway;
  beforeEach(function () {
    takeaway = new Takeaway(mockedMenu, order)
  });

  it('shows the menu with the dishes and prices', () => {
    expect(takeaway.printMenu()).toEqual("Prawn Toast: £4.50")
  })

  // it('is capable of ordering a number of dishes from menu', () => {
  //   expect(takeaway.placeOrder(dishes)).toEqual("Your order is for £23.50")
  // })
})