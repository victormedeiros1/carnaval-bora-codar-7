interface Props {
  title: string;
  cover: string;
  description: string;
  location: string;
}

export default function Block({ title, description, cover, location }: Props) {
  return (
    <article className="bg-white">
      <div>
        <img className="m-0" src={cover} alt={`Bloco ${title}`} />
      </div>
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        <h4 className="text-sm">{description}</h4>
        <h5 className="text-sm">{location}</h5>
      </div>
    </article>
  );
}
