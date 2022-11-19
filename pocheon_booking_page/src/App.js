import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./routes/Home.tsx";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App