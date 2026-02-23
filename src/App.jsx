import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import CategoryB from "./components/CategoryB/CategoryB";
import Container from "@mui/material/Container";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container maxWidth="lg">
         <CategoryB search={search} />
      </Container>
      <Footer />
    
    </>
  );
}

export default App;
