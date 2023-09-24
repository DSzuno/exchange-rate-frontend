import "./App.css";
import { Container } from "@mui/material";
import { ExchangeRate } from "./components/exchange-rate/exchange-rate";
import { Header } from "./components/layout/header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <ExchangeRate />
      </Container>
    </>
  );
}

export default App;
