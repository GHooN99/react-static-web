import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://flask-server-example.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <h1>
      파이썬 서버로 부터 가져온 데이터 ::
      <br />
      {data ? data.msg : "데이터 못가져왓어서 없습니다."}
    </h1>
  );
}

export default App;
