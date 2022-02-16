// Task 1 Создайте пустой объект 3-мя разными способами.
Object.create(null);

let object_1 = {};

let object_2 = new Object();

// Task 2

const ticket = {
  currency: "$",
  cost: 100,
  destination: "Minsk",
  name: "Ivan",
};

let { destination } = ticket;

console.log(destination);

// Task 3 https://www.codewars.com/kata/55685cd7ad70877c23000102
// Return Negative

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Task 4 https://www.codewars.com/kata/54147087d5c2ebe4f1000805
// The 'if' function

function _if(bool, func1, func2) {
  if (bool) {
    return func1();
  } else {
    return func2();
  }
}

// Task 5 https://www.codewars.com/kata/56c22c5ae8b139416c00175d
// Job Matching #1

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw "error";
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

// Task 6 https://www.codewars.com/kata/563b662a59afc2b5120000c6
// Growth of a Population

function nbYear(p0, percent, aug, p) {
  let count = 0;
  if (p0 >= p) {
    return count;
  }
  while (p0 < p) {
    count++;
    p0 = p0 + (p0 * percent) / 100 + aug;
  }
  return count;
}
