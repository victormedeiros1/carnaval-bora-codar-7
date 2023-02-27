import { createContext, useState } from "react";
import { Block } from "../types/block";
import { blockOptions } from "../helpers/slugs";

interface Props {
  children: React.ReactNode;
}

interface BlocksContextData {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

export const BlocksContext = createContext({} as BlocksContextData);

export default function BlocksContextProvider({ children }: Props) {
  const [blocks, setBlocks] = useState<Block[]>(blockOptions);

  return (
    <BlocksContext.Provider value={{ blocks, setBlocks }}>
      {children}
    </BlocksContext.Provider>
  );
}
