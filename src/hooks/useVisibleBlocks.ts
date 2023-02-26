import { useContext } from "react";
import { VisibleBlocksContext } from "../contexts/visibleBlocksContext";

export const useVisibleBlocks = () => {
  return useContext(VisibleBlocksContext);
};
