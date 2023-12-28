// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  //Setup initialize value
  const output = [];

  // if number in the arry > 5, push to the "output"
  numbers.forEach((num) => {
    if (num > 5) {
      output.push(num);
    }
  });

  return output;
}

const numbers = [2, 8, 4, 10, 1, 7];

console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
