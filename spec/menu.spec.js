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

  it('tells us if a dish in not included in the menu', () => {
    expect(menu.isContainingDish('Chicken Tikka Masala')).toEqual(false)
    expect(menu.isContainingDish('Prawn Toast')).toEqual(true)
  })

  it('returns a price given a dish', () => {
    expect(menu.price('Prawn Toast')).toEqual(4.50)
  })
})