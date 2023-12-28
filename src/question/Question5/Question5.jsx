// ## 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(10);
  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <span>This is the counter</span>
      <div className="container">
        <h1>Now Value</h1>
        <h2>{value}</h2>
        <div className="btnGroup">
          <button onClick={handleAdd}>增加</button>
          <button onClick={handleMinus}>減少</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

/*
說明：

1. 由於需要暫時記住並渲染值，使用 useState()記住值並初始為10。
2. 建立 handleAdd()、 handleMinus()，分別會對當前的值做增減。
3. 利用 onClick 將第二步建立的動作綁定在按鈕上。
4. 當按鈕被點擊，則會將當前的值做增減。

*/
