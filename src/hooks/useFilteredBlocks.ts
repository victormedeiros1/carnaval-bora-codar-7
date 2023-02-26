import { useContext } from "react";
import { FilteredBlocksContext } from "../contexts/filteredBlocksContext";

export const useFilteredBlocks = () => {
  return useContext(FilteredBlocksContext);
};
