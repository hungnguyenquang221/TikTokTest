import { useState } from "react";
import "./App.css";
// const orders = [100, 200, 300];
function App() {
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur);
  //   console.log(total);
  //   return total;
  // });
  // const handleIncrease = () => {
  //   setCounter((prevState) => prevState + 1);
  // };
  // return (
  //   <div className="App">
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "TP.Ho Chi Minh, VN",
  });
  const handeUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu màu hồng",
    });
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handeUpdate}>Update</button>
    </div>
  );
}

export default App;
