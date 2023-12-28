// 1. JavaScript: 字串反轉

function reverseString(str) {
  //Setup initialize value
  let output = "";

  // from end to head, add string to the "output"
  for (let index = str.length; index--; index >= 0) {
    console.log("index:", index);
    output += str[index];
  }

  return output;
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
