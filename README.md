# Meal Maker (Tutorial Project)

As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to **randomly create a three-course meal**, which includes appetizers, mains, and desserts, based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

## Technologies

- JavaScript ES6
- Node.js

## Features

```Javascript
- menu.addDishToCourse(courseName,dishName,dishPrice) 
    //It can be used to add a new dish to the specified course (appetizers, mains, or desserts) on the menu. Three parameters are required which are the course for the courseName, the dish for the the dishName, and the dish price for the dishPrice.
- console.log(menu.generateRandomMeal()) 
    //It can be used to automatically generate a three-course meal derived from the overall menu for us .
- console.log(menu.courses) 
    //It can be used to list out the whole menu including the dishes from all the courses, the appetizers, the mains, and the desserts, and its price.
- console.log(menu.courses.appetizers) 
    //It can be used to list out the dishes from the appetizers, and its price.
- console.log(menu.courses.mains) 
    //It can be used to list out the dishes from the mains, and its price.
- console.log(menu.courses.desserts) 
    //It can be used to list out the dishes from the desserts, and its price.

end
```

## Sources

This is a tutorial project from Chapter 4.4.5 in Full-Stack Engineer Career Path from [Codecademy](https://www.codecademy.com/).