import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

export default function Search() {
  return (
    <div className="bg-white flex gap-6 p-10">
      <div className="w-348 flex bg-[#F4F4FF] rounded-[5px]">
        <MapPinIcon className="h-6 w-6 text-red m-[0.875rem]" />
        <input
          className="w-full bg-transparent px-[0.875rem] py-3"
          type="text"
          placeholder="Pesquisar por nome"
          aria-placeholder="Pesquisar por nome"
        />
      </div>

      <div className="w-348 flex bg-[#F4F4FF] rounded-[5px]">
        <MagnifyingGlassIcon className="h-6 w-6 text-red m-[0.875rem]" />
        <select
          className="w-full bg-transparent px-[0.875rem] py-3"
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
