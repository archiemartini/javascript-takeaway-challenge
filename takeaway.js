
class Takeaway {


  constructor(menu) {
    this.menu = menu

  }

  printMenu() {
    return this.menu.showMenu()
  }
}

module.exports = Takeaway;