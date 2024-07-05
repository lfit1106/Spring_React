import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./sample/Main";
import List from "./sample/List";
import Content from "./sample/Content";

function App() {
  return (
      <>
        <h4>App</h4>
        <Routes>
          <Route path="/api/main" element={<Main />}></Route>
          <Route path="/api/list" element={<List />}></Route>
          <Route path="/api/content/:id" element={<Content />}></Route>
        </Routes>
      </>
  );
}

export default App;