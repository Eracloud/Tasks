// Task 1 Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr) {
  let newArr = arr.split(",");
  newArr.pop();
  newArr.shift();
  let result = newArr.join(" ");
  if (result.lenght < 3 || result === "") {
    return null;
  } else {
    return result;
  }
}

// Task 2 Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((a) => !geese.includes(a));
}

// Task 3 Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  num = String(num)
    .split("")
    .map((item) => item ** 2)
    .join("");
  num = Number(num);
  return num;
}

// Task 4  Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return `${max} ${min}`;
}

// Task 5 Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let arrOfLenght = s.split(" ").map((item) => item.length);
  return Math.min(...arrOfLenght);
}
