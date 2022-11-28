import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./routes/Home"
import Book from "./routes/Book"
import Title from "./component/title";

function App() {
  return <div>
    <BrowserRouter>
    <Title />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/:date" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App
