import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });

  return (
    <h1>
      가져온 데이터
      <br />
      {data ? data.msg : "데이터가 없습니다."}
    </h1>
  );
}

export default App;
