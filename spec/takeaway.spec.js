const Takeaway = require('../takeaway')
const Menu = require('../menu')

jest.mock('../menu.js')

describe('Takeaway class', () => {

  const mockedMenu = {
    showMenu: () => "Prawn Toast: £4.50"
  }

  let takeaway;
  beforeEach(function () {
    takeaway = new Takeaway(mockedMenu)
  });

  it('shows the menu with the dishes and prices', () => {
    expect(takeaway.printMenu()).toEqual("Prawn Toast: £4.50")
  })


})