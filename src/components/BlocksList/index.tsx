import { useEffect } from "react";
import { useBlocks } from "../../hooks/useBlocks";
import { useFilteredBlocks } from "../../hooks/useFilteredBlocks";
import Block from "./components/Block";
import Loading from "../Loading";

const url =
  "http://bora-codar-challenge-7-backend-production.up.railway.app/blocks";

export default function BlocksList() {
  const { blocks, setBlocks } = useBlocks();
  const { filteredBlocks } = useFilteredBlocks();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ blocks }) => setBlocks(blocks));
  }, []);

  if (!blocks) return <Loading />;

  return (
    <section className="max-w-[78.5rem] mx-auto my-0 p">
      <header className="mb-10 mt-24">
        <h3 className="text-lg font-bold">Blocos recomendados</h3>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {filteredBlocks.length > 0
          ? filteredBlocks?.map(
              ({ id, name, description, cover, location }) => (
                <Block
                  key={id}
                  name={name}
                  cover={cover}
                  description={description}
                  location={location}
                />
              )
            )
          : blocks?.map(({ id, name, description, cover, location }) => (
              <Block
                key={id}
                name={name}
                cover={cover}
                description={description}
                location={location}
              />
            ))}
      </div>
    </section>
  );
}
