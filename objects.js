// / Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
    { name: 'Caren', age: 19 },
    { name: 'Barack', age: 18 },
    { name: 'Sylvia', age: 23 },
    { name: 'Jeremy', age: 13 },
  ];
  const adultCitizen= arr => {
      const firstArr = []
      arr.forEach(item => {
          if(item.age >= 18)
           firstArr.push(item.name)
      });
      return firstArr
  }
  console.log(adultCitizen(people))
  // Write a function that takes an array of objects, where each object represents a product
  //  with a name, price, and category property.
  // The function should return an object that groups the products by their categories,
  // with the category names as keys and the arrays of products as values.
  function category(products) {
    const x = {};
    for (const product of products) {
      if (!x[product.category]) {
        x[product.category] = [];
      }
      x[product.category].push(product);
    }
    return x;
  }
  const products = [
    { name: 'pencil', price: 370, category: 'Stationery' },
    { name: 'pen', price: 230, 'categor':'stationery'},
    { name: 'book', price: 150, category: 'stationery' },
    { name: 'trousers', price: 750, category: 'Clothing' },
  ];
  const groupedProducts = category(products);
  console.log(groupedProducts);
  // Given an array of objects, where each object represents a student with a name and an array of scores,
  // write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
  // const students = [
  // 	{ name: 'John', scores: [90, 80, 85] },
  // 	{ name: 'Jane', scores: [95, 92, 88] },
  // 	{ name: 'Jim', scores: [70, 80, 75] },
  // 	{ name: 'Jill', scores: [85, 90, 84] },
  // ];
    function topStudents(students) {
      const y = [];
      for (const student of students) {
        const scores = student.scores;
        const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        if (averageScore >= 85) {
          y.push(student.name);
        }
      }
      return y;
    }
    const students = [
      { name: 'John', scores: [90, 80, 85] },
      { name: 'Jane', scores: [95, 92, 88] },
      { name: 'Jim', scores: [70, 80, 75] },
      { name: 'Jill', scores: [85, 90, 84] },
  ];
  const higherPerformers = topStudents(students);
  console.log(higherPerformers);
    // Given an object representing a car, with properties for the make, model, year, and a method to
  // display the car's information,
  // write a function that takes the car object and adds a new method to the object called age.
  // The age method should return the current age of the car based on the current year and the car's year property.
  // const car = {
  // 	make: 'Ford',
  // 	model: 'Ranger',
  //   year: 2023,
  //   displayInfo: function() {
  //   	console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  //   },
  // };
  function icreaseAge(car) {
    const thisYear = new Date().getFullYear();
    const caryear = car.year;
    car.age = function() {
      return thisYear - caryear;
    };
  }
  const car = {
    make: 'Ford',
    model: 'Ranger',
   year: 2023,
   displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
  };
  icreaseAge(car);
  console.log(car.age());
