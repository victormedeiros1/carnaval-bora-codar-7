interface Props {
  name: string;
  cover: string;
  description: string;
  location: string;
}

export default function Block({ name, description, cover, location }: Props) {
  return (
    <article className="bg-white border border-[#EAEAEA] rounded-10 ">
      <div>
        <img
          className="rounded-t-[10px] mr-0"
          src={cover}
          alt={`Bloco ${name}`}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-md font-bold">{name}</h3>
        <h4 className="text-sm">{description}</h4>
        <h5 className="text-sm">{location}</h5>
      </div>
    </article>
  );
}
