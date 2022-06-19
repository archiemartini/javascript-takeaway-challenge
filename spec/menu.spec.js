const Menu = require('../menu')

describe('Menu class', () => {

  let dishes = {
    'Prawn Toast': 4.50,
    'Singapore Vermicelli': 7.00,
    'Salt and Pepper Squid': 7.50
  }

  let menu;
  beforeEach(function () {
    menu = new Menu(dishes)
  })

  it('has a list of dishes with prices', () => {
    expect(menu.dishes).toBe(dishes)
  })

  it('prints a list of dishes with prices', () => {
    shown_menu = 'Prawn Toast: £4.50, Singapore Vermicelli: £7.00, Salt and Pepper Squid: £7.50'
    expect(menu.showMenu()).toEqual(shown_menu)
  })
})