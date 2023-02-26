import { createContext, useState } from "react";
import { Block } from "../types/block";

interface Props {
  children: React.ReactNode;
}

interface VisibleBlocksContextData {
  visibleBlocks: Block[];
  setVisibleBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

export const VisibleBlocksContext = createContext(
  {} as VisibleBlocksContextData
);

export default function VisibleBlocksContextProvider({ children }: Props) {
  const [visibleBlocks, setVisibleBlocks] = useState<Block[]>([]);

  return (
    <VisibleBlocksContext.Provider value={{ visibleBlocks, setVisibleBlocks }}>
      {children}
    </VisibleBlocksContext.Provider>
  );
}
