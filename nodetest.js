const Takeaway = require('./takeaway')
const Menu = require('./menu')

let dishes = {
  'Prawn Toast': 4.50,
  'Singapore Vermicelli': 7.00,
  'Salt and Pepper Squid': 7.50
}

menu = new Menu(dishes)

takeaway = new Takeaway(menu)