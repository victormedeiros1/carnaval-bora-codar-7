import Search from "../Search";

export default function Hero() {
  return (
    <main className="hero relative h-[33.25rem] bg-[#F8F8FF] flex flex-col justify-center items-center gap-10 px-5">
      <header className="flex flex-col text-center gap-[1.125rem] z-10">
        <h2 className="text-sm tracking-[10%] font-medium text-red">
          FIND YOUR BLOCK
        </h2>
        <h1 className="text-xl font-bold drop-shadow-md text-center max-w-[40.5rem]  mobile:text-lg">
          Encontre os <span className="text-purple">melhores blocos</span> de
          carnaval de 2023
        </h1>
      </header>

      <Search />
    </main>
  );
}
