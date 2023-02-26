import BlocksList from "./components/BlocksList";
import Container from "./components/Container";
import Hero from "./components/Hero";
import BlocksContextProvider from "./contexts/blocksContext";
import FilteredBlocksContextProvider from "./contexts/filteredBlocksContext";
import VisibleBlocksContextProvider from "./contexts/visibleBlocksContext";

function App() {
  return (
    <BlocksContextProvider>
      <VisibleBlocksContextProvider>
        <FilteredBlocksContextProvider>
          <Container>
            <Hero />
            <BlocksList />
          </Container>
        </FilteredBlocksContextProvider>
      </VisibleBlocksContextProvider>
    </BlocksContextProvider>
  );
}

export default App;
