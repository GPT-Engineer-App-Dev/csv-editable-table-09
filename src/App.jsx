import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CSVEditor from "./components/CSVEditor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/csv-editor" element={<CSVEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
