/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(e//
*/
//  Сделал сам ↓
//  var numbers = [1,2,3,4];

//  numbers.forEach (function (elem) {
//    console.log(elem);
//  })

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */

// Сделал сам ↓
//  var number = [1,2,3];

//  var numberSum = number.map( function (name) {
//    return name**2;
//  });

//  console.log(numberSum);

function map(array, fn) {
  const mass = [];

  for (let i = 0; i < array.length; i++) {
    mass[i] = fn(array[i], i, array);
  }

  return mass;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */

// Сделал сам ↓
//  var numbers = [1,2,3,4]

//  var result = numbers.reduce(function (sum, current) {
//    return sum + current;
//  });
//  console.log(result);

function reduce(array, fn, initial) {
  const hasInitial = typeof initial !== 'undefined';
  let prev = hasInitial ? initial : array[0];

  for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  }
  return prev;
}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  const props = [];

  for (const name in obj) {
    props.push(name.toUpperCase());
  }
  return props;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, createProxy };