import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainMenu from "./components/MainMenu";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainMenu />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
