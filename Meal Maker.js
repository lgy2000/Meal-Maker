const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return this._courses;
  },
  get appetizers() {},
  set appetizers(appetizersIn) {},
  get mains() {},
  set mains(mainsIn) {},
  get desserts() {},
  set desserts(dessertsIn) {},
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const num = Math.floor(Math.random() * this._courses[courseName].length);
    return dishes[num];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalprice = appetizer.price + main.price + dessert.price;
    return `appetizer:${appetizer.name}, main:${main.name}, dessert:${dessert.name}, total price:${totalprice}`;
  },
};

/*
menu.addDishToCourse('mains','sushi',10)
menu.addDishToCourse('mains','pasta',20)
menu.addDishToCourse('mains','pizza',30)
menu.addDishToCourse('appetizers','pesto',5)
menu.addDishToCourse('appetizers','burrito',6)
menu.addDishToCourse('appetizers','chips',7)
menu.addDishToCourse('desserts','icecream',5)
menu.addDishToCourse('desserts','cake',5)
menu.addDishToCourse('desserts','cakes',5)

//console.log(menu.generateRandomMeal()) 
//console.log(menu.courses) 
//console.log(menu.courses.appetizers) 
//console.log(menu.courses.mains) 
//console.log(menu.courses.desserts) 
*/
