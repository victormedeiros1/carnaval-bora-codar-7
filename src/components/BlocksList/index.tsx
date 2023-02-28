import { useVisibleBlocks } from "../../hooks/useVisibleBlocks";
import Block from "./components/Block";
import notfound from "/src/assets/images/not-found.svg";

export default function BlocksList() {
  const { visibleBlocks } = useVisibleBlocks();

  // API
  // const url =
  //   "http://bora-codar-challenge-7-backend-production.up.railway.app/blocks";
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(({ blocks }) => setBlocks(blocks));
  // }, []);

  // if (!blocks) return <Loading />;

  return (
    <section className="max-w-[78.5rem] mx-auto my-24 px-5 mobile:my-12">
      <header className="mb-10 mobile:mb-4">
        <h3 className="text-lg font-bold mobile:text-md">
          Blocos recomendados
        </h3>
      </header>
      {visibleBlocks.length > 0 ? (
        <div className="grid grid-cols-3 gap-8 mobile:gap-2 mobile:grid-cols-2 mobilexs:grid-cols-1">
          {visibleBlocks?.map(({ id, name, description, cover, location }) => (
            <Block
              key={id}
              name={name}
              cover={cover}
              description={description}
              location={location}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center flex-col">
          <img className="w-96 mx-auto" src={notfound} alt="Nada encontrado" />
          <h2 className="text-lg font-bold mt-4">Nenhum bloco encontrado</h2>
        </div>
      )}
    </section>
  );
}
