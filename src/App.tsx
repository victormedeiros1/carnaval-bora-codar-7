import BlocksList from "./components/BlocksList";
import Container from "./components/Container";
import Hero from "./components/Hero";
import BlocksContextProvider from "./contexts/blocksContext";
import FilteredBlocksContextProvider from "./contexts/filteredBlocksContext";

function App() {
  return (
    <BlocksContextProvider>
      <FilteredBlocksContextProvider>
        <Container>
          <Hero />
          <BlocksList />
        </Container>
      </FilteredBlocksContextProvider>
    </BlocksContextProvider>
  );
}

export default App;
