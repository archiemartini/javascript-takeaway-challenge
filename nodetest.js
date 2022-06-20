const Takeaway = require('./takeaway')
const Menu = require('./menu')
const Order = require('./order')
const Sms = require('./sms')

let dishes = {
  'Prawn Toast': 4.50,
  'Singapore Vermicelli': 7.00,
  'Salt and Pepper Squid': 7.50
}


menu = new Menu(dishes)
order = new Order(menu)
sms = new Sms()
takeaway = new Takeaway(menu, order, sms)

order.addDish('Prawn Toast', 3)
takeaway.placeOrder()