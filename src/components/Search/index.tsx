import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

export default function Search() {
  return (
    <div className="z-10 w-full max-w-[62rem] bg-white border border-[#EAEAEA] rounded-[10px] flex gap-6 p-10">
      <div className="w-full max-w-348 flex bg-[#F4F4FF] rounded">
        <MapPinIcon className="h-6 w-6 text-red m-3.5 my-auto" />
        <input
          className="w-full text-gray-00 bg-transparent px-3.5 py-3"
          type="text"
          placeholder="Pesquisar por nome"
          aria-placeholder="Pesquisar por nome"
        />
      </div>

      <div className="w-full max-w-348 bg-[#F4F4FF] flex rounded">
        <MagnifyingGlassIcon className="h-6 w-6 text-red mx-3.5 my-auto" />
        <select
          className="w-full text-gray-700 bg-transparent px-3.5 py-3"
          name="cities"
        >
          <option value="Bloco 1">Bloco 1</option>
          <option value="Bloco 2">Bloco 2</option>
          <option value="Bloco 3">Bloco 3</option>
        </select>
      </div>

      <Button>BUSCAR AGORA</Button>
    </div>
  );
}
