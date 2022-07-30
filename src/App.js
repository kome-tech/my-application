import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
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
