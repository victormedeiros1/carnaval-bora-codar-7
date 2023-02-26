import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

import { useBlocks } from "../../hooks/useBlocks";
import { useFilteredBlocks } from "../../hooks/useFilteredBlocks";

const locations = [
  {
    id: 0,
    name: "Caicó - RN",
  },
  {
    id: 1,
    name: "Natal - RN",
  },
  {
    id: 2,
    name: "Salvador - BA",
  },
  {
    id: 3,
    name: "Péssimo - MC",
  },
];

export default function Search() {
  const { blocks } = useBlocks();
  const { setFilteredBlocks } = useFilteredBlocks();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const text = e.target.ele;
    const filteredBlocks = blocks.filter((block) => block.name.includes(text));

    setFilteredBlocks(filteredBlocks);
    console.log("FILTERED BLOCKS", filteredBlocks);
  };

  return (
    <div className="z-10 w-full max-w-[62rem] bg-white border border-[#EAEAEA] rounded-[10px]  p-10">
      <form className="flex gap-6" onSubmit={handleSubmit}>
        <div className="w-full max-w-348 flex bg-[#F4F4FF] rounded">
          <MagnifyingGlassIcon className="h-6 w-6 text-red mx-3.5 my-auto" />

          <input
            className="w-full text-gray-700 bg-transparent px-3.5 py-3"
            type="text"
            name="text"
            placeholder="Pesquisar por nome"
          />
        </div>

        <div className="w-full max-w-348 bg-[#F4F4FF] flex rounded">
          <MapPinIcon className="h-6 w-6 text-red m-3.5 my-auto" />

          <select
            className="w-full text-gray-700 bg-transparent px-3.5 py-3"
            name="locations"
          >
            {locations.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <Button>BUSCAR AGORA</Button>
      </form>
    </div>
  );
}
