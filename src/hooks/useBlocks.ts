import { useContext } from "react";
import { BlocksContext } from "../contexts/blocksContext";

export const useBlocks = () => {
  return useContext(BlocksContext);
};
