import { useEffect } from "react";
import { useBlocks } from "../../hooks/useBlocks";
import { useFilteredBlocks } from "../../hooks/useFilteredBlocks";
import Block from "./components/Block";
import Loading from "../Loading";
import { useVisibleBlocks } from "../../hooks/useVisibleBlocks";

// const url =
//   "http://bora-codar-challenge-7-backend-production.up.railway.app/blocks";
const blocksArray = [
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
];
export default function BlocksList() {
  const { blocks, setBlocks } = useBlocks();
  const { visibleBlocks } = useVisibleBlocks();

  // API
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(({ blocks }) => setBlocks(blocks));
  // }, []);

  // if (!blocks) return <Loading />;

  useEffect(() => {
    setBlocks(blocksArray);
  });

  return (
    <section className="max-w-[78.5rem] mx-auto my-0 p">
      <header className="mb-10 mt-24">
        <h3 className="text-lg font-bold">Blocos recomendados</h3>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {visibleBlocks.length > 0 ? (
          visibleBlocks?.map(({ id, name, description, cover, location }) => (
            <Block
              key={id}
              name={name}
              cover={cover}
              description={description}
              location={location}
            />
          ))
        ) : (
          <div>Nenhum bloco encontrado</div>
        )}
      </div>
    </section>
  );
}
