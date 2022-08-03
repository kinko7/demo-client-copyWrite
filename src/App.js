import TextForm from "./components/TextForm";
import TextList from "./components/TextList";
import Menu from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route index path="/" element={<TextList/>} />
          <Route path="/text/new" element={<TextForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}


export default App;
