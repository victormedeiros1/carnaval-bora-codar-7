import BlocksList from "./components/BlocksList";
import Container from "./components/Container";
import Hero from "./components/Hero";
import BlocksContextProvider from "./contexts/blocksContext";

function App() {
  return (
    <BlocksContextProvider>
      <Container>
        <Hero />
        <BlocksList />
      </Container>
    </BlocksContextProvider>
  );
}

export default App;
