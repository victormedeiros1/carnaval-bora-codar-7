import { createContext, useState } from "react";
import { Block } from "../types/block";

interface Props {
  children: React.ReactNode;
}

interface FilteredBlocksContextData {
  filteredBlocks: Block[];
  setFilteredBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

export const FilteredBlocksContext = createContext(
  {} as FilteredBlocksContextData
);

export default function FilteredBlocksContextProvider({ children }: Props) {
  const [filteredBlocks, setFilteredBlocks] = useState<Block[]>([]);

  return (
    <FilteredBlocksContext.Provider
      value={{ filteredBlocks, setFilteredBlocks }}
    >
      {children}
    </FilteredBlocksContext.Provider>
  );
}
