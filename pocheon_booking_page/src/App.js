import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./routes/Home"
import Book from "./routes/Book"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/:id" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App
