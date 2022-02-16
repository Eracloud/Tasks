// Task 1 https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Task 2 https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript
// Do I get a bonus?

function bonusTime(salary, bonus) {
  if (bonus) {
    return `\u00A3${salary * 10}`;
  } else {
    return `\u00A3${salary}`;
  }
}

// Task 3 https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// Is he gonna survive?

function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    // здесь я чет не понял, чему равно это выражение
    return true;
  } else {
    return false;
  }
}

// Task 4 https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
// Convert a Boolean to a String )

function booleanToString(b) {
  return String(b);
}

// Task 5 https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// Count Odd Numbers below n

function oddCount(n) {
  return Math.floor(n / 2);
}
