// 4.條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

export default function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染

  const printRendering = isLoggedIn ? (
    <p>User login!</p>
  ) : (
    <p>You're not login yet! </p>
  );

  return printRendering;
}

// In App.jsx
// import ConditionalRendering from "./question/Question4";
/*
export default function App() {
  return (
    <div className="App">
      <ConditionalRendering isLoggedIn={false} />
      <ConditionalRendering isLoggedIn={true} />
    </div>
  );
}
*/

// If isLoggedIn === true, expect to print: User login!
// If not, print: You're not login yet!
