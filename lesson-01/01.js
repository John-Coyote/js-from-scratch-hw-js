// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let startNumber = 1;
let endNumber = 20;

while(startNumber <= endNumber) {
sum += startNumber;
  startNumber++
}

console.log(`Сумма чисел от 1 до 20 равна ${sum}`);