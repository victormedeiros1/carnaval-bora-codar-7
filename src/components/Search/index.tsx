import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useBlocks } from "../../hooks/useBlocks";
import { useVisibleBlocks } from "../../hooks/useVisibleBlocks";
import { locationOptions } from "../../helpers/slugs";
import Button from "../Button";

export default function Search() {
  const { blocks } = useBlocks();
  const { setVisibleBlocks } = useVisibleBlocks();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const text = e.target.elements.text.value;
    const location = e.target.elements.locations.value;

    const filteredBlocks = blocks.filter(
      (block) => block.name.includes(text) && block.location.includes(location)
    );

    if (filteredBlocks.length > 0) {
      setVisibleBlocks(filteredBlocks);
    } else {
      setVisibleBlocks([]);
    }
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
            placeholder="Nome"
          />
        </div>

        <div className="w-full max-w-348 flex bg-[#F4F4FF] rounded">
          <MapPinIcon className="h-6 w-6 text-red m-3.5 my-auto" />

          <select
            className="w-full text-gray-700 bg-transparent px-3.5 py-3"
            name="locations"
          >
            <option value="">Qualquer lugar</option>
            {locationOptions.map(({ id, name }) => (
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
