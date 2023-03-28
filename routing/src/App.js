import { Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Form  from "./components/Form";
import Log  from "./components/Log";

function App() {
  return (

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>

          <li>
            <Link to="/form"> Form </Link>
          </li>

          <li>
            <Link to="/log"> Log </Link>
          </li>

        </ul>
      </nav>
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/form" element={<Form />} />
      <Route path="/log" element={<Log />} />
    </Routes>

    </div>

  );
}

export default App



