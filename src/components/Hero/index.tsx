import Search from "../Search";

export default function Hero() {
  return (
    <main className="h-[33.25rem] bg-[#F8F8FF] flex flex-col justify-center items-center border-[#EAEAEA] rounded-[10px] gap-10">
      <img
        className="absolute top-0 left-0 z-0"
        src="/src/assets/images/ilu-1.svg"
        alt="ilustration-1"
      />
      <img
        className="absolute bottom-0 right-0 z-0"
        src="/src/assets/images/ilu-2.svg"
        alt="ilustration-2"
      />
      <header className="flex flex-col text-center gap-[1.125rem] z-10">
        <h2 className="text-lg font-medium text-red">FIND YOUR BLOCK</h2>
        <h1 className="text-5xl font-bold text-center">
          Encontre os <span className="text-purple">melhores blocos</span>
          <br /> de carnaval de 2023
        </h1>
      </header>

      <Search />
    </main>
  );
}
