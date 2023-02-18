import { createContext, useState } from "react";
import { Block } from "../types/block";

interface Props {
  children: React.ReactNode;
}

interface BlocksContextData {
  blocks: Block[];
  setBlocks: (state: []) => void;
}

// export const BlocksContext = createContext({} as any);
export const BlocksContext = createContext({} as BlocksContextData);

export default function BlocksContextProvider({ children }: Props) {
  const [blocks, setBlocks] = useState([
    {
      id: 0,
      name: "Theme só res enha",
      cover: "/src/assets/images/bloco-1.jpg",
      description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
      location: "Natal - RN",
    },
    {
      id: 1,
      name: "Não sou deSASS coisas",
      cover: "/src/assets/images/bloco-2.jpg",
      description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
      location: "Caicó - RN",
    },
    {
      id: 2,
      name: "Assets te pego",
      cover: "/src/assets/images/bloco-3.jpg",
      description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
      location: "Salvador - BA",
    },
    {
      id: 3,
      name: "As gata e IML",
      cover: "/src/assets/images/bloco-4.jpg",
      description: "Lorem ipsum dolot sit amet lorem ipsum dolot sit amet",
      location: "Péssimo - MC",
    },
  ]);

  return (
    <BlocksContext.Provider value={{ blocks, setBlocks }}>
      {children}
    </BlocksContext.Provider>
  );
}
