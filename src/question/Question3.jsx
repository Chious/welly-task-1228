// 3.JavaScript: 重構
// 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  if (typeof firstName === "string" && typeof lastName === "string") {
    return firstName.concat(" ", lastName);
  } else {
    if (firstName && lastName) {
      alert("firstName and lastName should be character!");
    } else {
      alert("firstName or lastName is missing!");
    }
  }
}

/*
說明：

1. if loop：
1-1 型別檢查：由於 Name 預期應該是一個字串，如果沒有則會跳出一個alert();
1-2 遺漏檢查：lastName 與 firstName預期應該存在，如果其一不存在同上;
1-3 將兩個判斷字首、字尾合併，增加程式碼效率。

2. 使用 concat()合併字串：相較於"+"，concat()並不會另外建立一個空間去處理firstName及lastName，
而是直接將兩個值做合併，處理起來會比較有效率。

詳見：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
*/
